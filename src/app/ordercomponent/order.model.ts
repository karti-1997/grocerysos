import {Product} from './product.model'
export interface Order {
    id: string
    customerId:string
    vendorId: string
    products: Product[]
    amount : Number
    orderStatus: string
}