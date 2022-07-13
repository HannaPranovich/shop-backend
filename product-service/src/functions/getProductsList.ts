import { errorResponse, successResponse, } from "../utils";
import { getAllProductsPG } from '../services';


export const getProductsList = async () => {
  try {
    const products = await getAllProductsPG();

    return successResponse({ products });

  } catch (error) {
    return errorResponse(error);
  }
}