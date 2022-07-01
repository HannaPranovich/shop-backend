import { getAllProducts, errorResponse, successResponse, } from "../utils/index";

export const getProductsList = async () => {
  try {
    const products = await getAllProducts();

    return successResponse({ products });

  } catch (error) {
    return errorResponse(error);
  }
}