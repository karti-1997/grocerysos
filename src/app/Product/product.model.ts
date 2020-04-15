export interface Inventory {
    vendorid: string;
    products:[{
        productName: string
        productId: string
        productBrand: string
        unit: string
        Description: string
        stockCnt: number
        MRP: number
    }]
  }