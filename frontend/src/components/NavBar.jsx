import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import { IoChevronDown } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";

function NavBar() {
    return (
        <nav className="flex justify-between items-center my-2 mx-3 ">
            <div>
                <img src="data:image/png;base64,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" alt="logo" style={{ width:'100px', height: '100px', mixBlendMode:'color-burn'}}/>
            </div>
            <div>
                <ul className="flex justify-between items-center text-lg gap-8 text-white cursor-pointer ">
                    <li className="hover:bg-gray-600 p-4 rounded-lg">Home</li>
                    <li className="hover:bg-gray-600 p-4 rounded-lg">About Us</li>
                    <li className="hover:bg-gray-600 p-4 rounded-lg">Store</li>
                    <li className="hover:bg-gray-600 p-4 rounded-lg">Contact</li>
                </ul>
            </div>
            <div className="flex justify-between items-center gap-8 mr-9 text-white text-lg cursor-pointer">
                <div className="flex justify-center items-center"><p className="mr-2">Eng</p><IoChevronDown /></div>
                <FaRegUser size={25}/>
                <CiShoppingCart size={35} />
            </div>
        </nav>
    )
}

export default NavBar;
