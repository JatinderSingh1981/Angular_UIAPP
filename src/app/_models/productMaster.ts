import { ProductDetail } from './productDetail';

export interface ProductMaster {
  productMasterId: number,
  computerType: string,
  computerTypeId: number,
  processor: string,
  processorId: number,
  brand: string,
  brandId: number,
  usbPorts: number,
  ramSlots: number,
  quantity: number,
  description: string,
  productDetails: ProductDetail[]
}
