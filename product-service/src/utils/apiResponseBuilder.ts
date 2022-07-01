import { IResponse } from "./types";

const defaultHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': '*',
  'Access-Control-Allow-Methods': '*',
}

export const errorResponse = (error: Error, statusCode: number = 500): IResponse => {
  console.log("errorResponse", error.message);

  return {
    statusCode,
    headers: { ...defaultHeaders },
    body: JSON.stringify({ message: error.message || 'Error' })
  }
}

export const successResponse = (response: Record<string, unknown>, statusCode: number = 200): IResponse => {
  console.log("successResponse")
  return {
    statusCode,
    headers: { ...defaultHeaders },
    body: JSON.stringify(response)
  }
}

