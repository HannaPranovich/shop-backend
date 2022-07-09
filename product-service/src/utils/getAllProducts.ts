import { products, IProduct } from "../mocks";

export const getAllProducts = async (): Promise<IProduct[]> => products;