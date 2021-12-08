import React, { useState } from "react"
import { FiArrowDown, FiMenu } from "react-icons/fi"
// import HeaderMenu from "./HeaderMenu";

const BottomHeader = () => {
    const [isMenuActive, setIsMenuActive] = useState(false)
    return (
        <div className="bg-gray-900 h-12">
            <div className="header__bottom h-12 container grid grid-cols-12 text-white">
                <div className=" select-none relative header__bottom--left col-span-3 flex flex-row justify-around items-center h-full text-3xl bg-red-700 cursor-pointer">
                    <FiMenu onClick={()=>setIsMenuActive(!isMenuActive)} />
                    <span onClick={()=>setIsMenuActive(!isMenuActive)}>Catagories</span>
                    <FiArrowDown onClick={()=>setIsMenuActive(!isMenuActive)} className="animate-bounce" />
               {/* {isMenuActive &&  <div className="absolute top-12 z-20 w-full text-black border ">
                    <HeaderMenu />
                </div>} */}
                </div>
                <div className="header__bottom--menu col-span-9 items-center flex justify-between w-full text-sm pl-2 flex-1">
                    <ul className="header__bottom--menu ml-4 flex flex-row justify-around gap-6">
                        <li>
                            <a className="hover:text-red-600" href="/">
                                All Shops
                            </a>
                        </li>
                        <li>
                            <a className="hover:text-red-600" href="/">
                                Gift Card
                            </a>
                        </li>
                        <li>
                            <a className="hover:text-red-600" href="/">
                                Campaigns
                            </a>
                        </li>
                        <li>
                            <a className="hover:text-red-600" href="/">
                                Top-up
                            </a>
                        </li>
                        <li>
                            <a className="hover:text-red-600" href="/">
                                Express
                            </a>
                        </li>
                    </ul>
                    <ul className="header__bottom--menu flex flex-row  gap-6 justify-self-end right-0 ">
                        <li>
                            <a className="hover:text-red-600" href="/">
                                New Feeds
                            </a>
                        </li>
                        <li>
                            <a className="hover:text-red-600" href="/">
                                Merchent Zone
                            </a>
                        </li>
                        <li>
                            <a className="hover:text-red-600" href="/">
                                Help
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default BottomHeader
