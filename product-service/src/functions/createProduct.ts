import { createProductsPG } from '../services';
import { errorResponse, successResponse, } from "../utils";

export const createProduct = async (event) => {
  const { title, description, price, count } = JSON.parse(event.body);

  if (!title || !description || !price) {
    throw new Error('Missing required data')
  };


  try {
    const createdProduct = await createProductsPG({ title, description, price, count });

    return successResponse(createdProduct);

  } catch (error) {
    return errorResponse(error);
  }
};;