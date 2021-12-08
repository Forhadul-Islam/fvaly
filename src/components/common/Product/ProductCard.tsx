import { Card } from "antd"
import IProduct from "model/types"
import React from "react"
import { Link } from "react-router-dom"

interface IProps {
    product: IProduct
}

const ProductCard = ({ product }: IProps) => {
    return (
        <>
            <Card
                className="bg-white shadow-md p-3 sm:col-span-12 md:col-span-6 lg:col-span-3 cursor-pointer hover:shadow-xl hover:border-gray-300"
                style={{ width: 310 }}
            >
                <Link to={`product/${product._id}`}>
                    <img
                        className=""
                        src={`https://res.cloudinary.com/shadincloudinarytraining/image/upload/${product.image}`}
                        alt="product"
                    />
                    <div className="product__name text-md leading-relaxed whitespace-pre-line py-3">
                        {product.name}
                    </div>
                    <div className="product__pre-price line-through text-gray-400 text-xl">
                        ${product.price + 15}
                    </div>
                    <div className="product__current-price text-xl text-gray-800">
                        ${product.price}
                    </div>
                </Link>
            </Card>
        </>
    )
}

export default ProductCard
