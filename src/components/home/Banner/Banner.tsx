import React from "react"
import Carosel from "./BannerCarosel"
import Menu from "./Menu"

const Banner = () => {
    return (
        <div className="container h-96 grid grid-cols-12 justify-items-stretch">
            <div className="col-span-3 bg-white border-2 border-gray-200">
                <Menu />
            </div>
            <div className="col-span-9">
                <Carosel />
            </div>
        </div>
    )
}

export default Banner
