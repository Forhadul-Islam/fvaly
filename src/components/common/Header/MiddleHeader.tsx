import React from "react"
import { AiOutlineNotification } from "react-icons/ai"
// import { CgProfile } from "react-icons/cg"
import { FiSearch } from "react-icons/fi"
import { HiOutlineShoppingCart } from "react-icons/hi"
import { IoMdLogIn } from "react-icons/io"
import { useSelector } from "react-redux"
import { useHistory } from "react-router"
import logo from "../../../assets/images/fvaly.png"
import { AppStore } from "redux/stores"
import { Link } from "react-router-dom"

const MiddleHeader = () => {
    const history = useHistory()
    const cart = useSelector((state: AppStore) => state.cart)
    const goToHome = () => {
        history.push("/")
    }
    return (
        <div className="bg-white">
            <div className="header__middle  h-20 grid grid-cols-11 container items-center">
                <img
                    className="header__middle--logo col-span-2 justify-around h-12 mb-2 cursor-pointer"
                    src={logo}
                    alt="Fvaly"
                    onClick={goToHome}
                />
                <div className="header__middle--search col-span-6 flex flex-row h-11 mx-2 ">
                    <input
                        className="flex w-full outline-none border-2 border-red-700 rounded-l-md pl-2"
                        type="text"
                        placeholder="Search for..."
                    />
                    <button className="bg-red-700 w-2/5 text-center text-white flex place-content-center items-center border-none text-2xl rounded-r-md hover:bg-red-600">
                        <FiSearch />{" "}
                    </button>
                </div>
                <div className="header__middle--options col-span-3 flex justify-around text-2xl">
                    <Link to="/checkout" className="absolute">
                        <HiOutlineShoppingCart className="absolute h-10 w-10 rounded-full bg-white p-2 cursor-pointer shadow-md" />
                        <span className="relative ml-9 p-1  right-0 inline-flex rounded-full text-sm text-white font-bold justify-center h-5 w-5 items-center bg-red-600">{cart.length}</span>
                    </Link>
                    <div>
                        <AiOutlineNotification className="h-10 w-10 rounded-full bg-white p-2 cursor-pointer shadow-md" />
                    </div>
                    <Link to="/auth">
                        <IoMdLogIn className="h-10 w-10  rounded-full bg-white p-2 cursor-pointer shadow-md" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default MiddleHeader

