import { ProductMaster } from '../_models/productMaster';

export interface ProductResponse {
    product: ProductMaster,
    isSuccess: boolean,
    message: string,
}
