import React from "react"
import { BsPhone } from "react-icons/bs"
import { FiMail, FiPhoneCall } from "react-icons/fi"

const TopHeader = () => {
    return (
        <>
            <div className="header__top container flex justify-between items-center py-3">
                <ul className="flex items-center divide-x divide-green-500">
                    <li className="flex items-center mr-3 font-medium">
                        <FiPhoneCall className="mr-2 text-red-600" />
                        +8801558920035
                    </li>
                    <li className="flex items-center font-medium">
                        <FiMail className="mr-2 text-red-600 ml-2" />
                        <span>help@gvaly.com</span>
                    </li>
                </ul>
                <div className="flex items-center font-medium">
                    <BsPhone className="mr-2 text-red-600" />
                    <span>Save big on out app!</span>
                </div>
            </div>
            <div className="header__top--line" />
        </>
    )
}

export default TopHeader
