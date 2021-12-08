import React from "react"

const menuItems = [
    "Desktop",
    "Laptop",
    "Men's Watch",
    "Motor Bike",
    "Refregerator",
    "Smart Phone",
    "Smart TV & Android TV",
    "Speaker",
]

const HeaderMenu = () => {
    return (
        <div className="divide-y-2 text-xl bg-white ">
            {menuItems.map((item, idx) => (
                <div
                    className="select-none py-2 px-2 cursor-pointer hover:bg-gray-100 hover:text-red-500 hover:translate-x-1 transform"
                    key={idx}
                >
                    {item}
                </div>
            ))}
        </div>
    )
}

export default HeaderMenu
