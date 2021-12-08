import IProduct from "../model/types"
import requests from "./HttpServices"

class ProductServices {
    getProducts(): Promise<IProduct[]> {
        return requests.get("/product")
    }

    getProductById(id: string): Promise<IProduct> {
        return requests.get(`/product/${id}`)
    }

    updataProduct(id: string, body: {}): Promise<IProduct[]> {
        return requests.patch(`/product/${id}`, body)
    }

    deleteProduct(id: string): Promise<IProduct[]> {
        return requests.delete(id)
    }
}

export default new ProductServices()
