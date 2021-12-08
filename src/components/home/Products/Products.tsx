import ProductCard from "components/common/Product/ProductCard"
import React from "react"
// import FallbackSceleton from "sceletons/FallbackSceleton"
import ProductSceleton from "sceletons/ProductSceleton"
import IProduct from "../../../model/types"

interface IProps {
    products: IProduct[] | null
    title: string
    isSuccess: boolean
    isLoading: boolean
    isError: boolean
}

const Products = ({
    products,
    title,
    isSuccess,
    isLoading,
    isError,
}: IProps) => {
    console.log({ isLoading, isError, isSuccess })
    return (
        <div className="products container mt-10 ">
            <div className="products__title text-transparent text-5xl mb-10 font-semibold text-gray-900">
                {title} 
            </div>
            {/* <div className="h-1 opacity-25 mt-2 bg-gradient-to-r from-gray-500 to-red-300 mb-8" /> */}
            <div className="products__container grid grid-cols-12 gap-3">
                {isSuccess &&
                    products?.map((product: IProduct) => (
                        <ProductCard key={product._id} product={product} />
                    ))}
                {isLoading &&
                    ["", "", "", "", "", "", "", "", ""].map((item, idx) => (
                        <ProductSceleton key={idx} />
                    ))}
                {isError && (
                    <div className=" col-span-12 h-56 text-red-900 text-4xl text-center font-semibold mt-2">
                        <div
                            className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
                            role="alert"
                        >
                            <div className="flex">
                                <div className="py-1">
                                    <svg
                                        className="fill-current h-6 w-6 text-teal-500 mr-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-bold">
                                        Sorry, Something went wrong..
                                    </p>
                                    <p className="text-sm">
                                       Faild to load the products for you!
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                )}
            </div>
        </div>
    )
}

export default Products
