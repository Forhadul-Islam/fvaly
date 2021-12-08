// import banner2 from "../../../assets/images/banner2.png"
import { Carousel } from "antd"
import React from "react"
import banner1 from "../../../assets/images/banner1.png"

const BannerCarosel = () => {
    return (
        <div className="border-none pl-3 pt-3">
            <Carousel>
                <img src={banner1} alt="Banner" />
            </Carousel>
        </div>
    )
}

export default BannerCarosel
