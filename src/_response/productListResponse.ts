import { ProductMaster } from '../_models/productMaster';

export interface ProductListResponse {
    productList: ProductMaster[],
    isSuccess: boolean,
    message: string,
}
