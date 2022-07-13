import { APIGatewayProxyEvent } from 'aws-lambda';
import { errorResponse, successResponse, } from "../utils";
import { getByIdPG } from '../services';

export const getProductsById = async (event: APIGatewayProxyEvent) => {
  console.log("getProductsById event", event);

  try {
    const { productId = '' } = event.pathParameters;

    if (!productId) {
      throw new Error('ID is required.')
    };

    const product = await getByIdPG(productId);


    if (product) {
      return successResponse(product)
    }

  } catch (error) {
    return errorResponse(error);
  }
};