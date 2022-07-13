import { Client } from 'pg';

const { PG_HOST, PG_PORT, PG_DATABASE, PG_USERNAME, PG_PASSWORD } = process.env;

const dbOptions = {
  host: PG_HOST,
  port: Number(PG_PORT),
  database: PG_DATABASE,
  user: PG_USERNAME,
  password: PG_PASSWORD,
  connectionTimeoutMillis: 5000,
  ssl: {
    rejectUnauthorized: false,
  }
};

console.log(process.env);

export const getClient = () => new Client(dbOptions);

export const getAllProductsPG = async () => {
  const client = getClient();
  await client.connect();

  try {
    const { rows } = await client.query(`
    SELECT p.id, title, description, price, count
    FROM products p
    LEFT JOIN stocks s 
    ON p.id = s.product_id 
  `)

    return rows;
  } catch (error) {
    throw (error);
  }
  finally {
    client.end();
  }
}

export const getByIdPG = async (
  id: string,
) => {
  const client = new Client(dbOptions);
  await client.connect();
  try {
    const result = await client.query(
      `
        WITH all_stocks as (
          SELECT count FROM stocks WHERE product_id = $1
        )
        SELECT
          product_id,
          title,
          description,
          price,
          (SELECT sum(count) FROM all_stocks) as count
        FROM products 
        WHERE product_id = $1;
      `,
      [id]
    );
    return result.rows;
  } catch (error) {
    throw (error);
  } finally {
    await client.end();
  }
}

export const createProductsPG = async ({
  title,
  description,
  price,
  count = 0,
}) => {
  const client = getClient();
  await client.connect();

  try {
    await client.query('BEGIN');

    const { rows: products } = await client.query(`
      INSERT INTO products (title, description, price)
      VALUES ('${title}', '${description}', ${price})
      RETURNING *
    `)

    await client.query(`
      INSERT INTO stocks (product_id, count)
      VALUES ('${products[0].product_id}', ${count})
    `)

    await client.query('COMMIT');

    return { ...products[0], count };
  } catch (error) {
    await client.query('ROLLBACK');
    throw (error);
  } finally {
    await client.end();
  }
}