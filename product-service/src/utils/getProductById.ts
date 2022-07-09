import { products, IProduct } from "../mocks";

export const getProductById = async (id: string): Promise<IProduct> => new Promise(resolve => resolve(products.find(product => product.id === id)))
