import useAsync from "hooks/useAsync"
import IProduct from "model/types"
import React, { useCallback } from "react"
import { useParams } from "react-router-dom"
import { addToCart } from "redux/actionCreators/cartActionCreators"
import FallbackSceleton from "sceletons/FallbackSceleton"
import ProductServices from "services/ProductServices"
import imageUrlParser from "../../util/imageUrlParser"
import {useDispatch} from "react-redux";


// interface Props {}
interface IParams {
    id: string
}

export const ProductDetails = () => {
    const {id} = useParams<IParams>()
    const dispatch = useDispatch();
    const handleAddToCart = (product: IProduct): void => {
        dispatch(addToCart(product));
    }
    const getProduct = useCallback(() => {
        return ProductServices.getProductById(id)
    }, [id])
    const { data:  product, isSuccess } = useAsync<IProduct>(getProduct)
    const { name, price, description, image } = (product || {}) as IProduct
    if (isSuccess) {
        return (
            <div className="product-details container containe w-5/6  my-5 bg-white h-full grid grid-cols-2 items-center shadow-2xl">
                <img
                    className="col-span-1"
                    height="220px"
                    src={imageUrlParser(image)}
                    alt="product image"
                />
                <div className="col-span-1">
                    <div className="text-3xl font-bold text-gray-800">
                        {name}
                    </div>
                    <div className="text-gray-700 text-4xl font-bold my-2">
                        $ {price}
                    </div>
                    <button onClick={() => handleAddToCart(product as IProduct)} className="bg-red-600 px-4 py-2 text-white text-xl my-2 border-2 hover:bg-red-700 shadow-md">
                        add to cart
                    </button>
                    <div className="text-justify text-lg">{description}</div>
                </div>
            </div>
        )
    } else return <FallbackSceleton />
}
