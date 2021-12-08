import React from "react"
import BottomHeader from "./BottomHeader"
import MiddleHeader from "./MiddleHeader"
import TopHeader from "./TopHeader"

const Header = () => {
    return (
        <div className="header">
            <TopHeader />
            <MiddleHeader />
            <BottomHeader />
        </div>
    )
}

export default Header
