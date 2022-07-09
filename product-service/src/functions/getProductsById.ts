import { APIGatewayProxyEvent } from 'aws-lambda';
import { getProductById, errorResponse, successResponse, } from "../utils";

export const getProductsById = async (event: APIGatewayProxyEvent) => {
  console.log("getProductsById event", event);

  try {
    const { productId = '' } = event.pathParameters;

    const product = await getProductById(productId);

    
    if (product) {
      return successResponse(product)
    }

  } catch (error) {
    return errorResponse(error);
  }
};