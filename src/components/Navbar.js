import React from "react";
import Logo from "../images/Logo.png"

export default function Navbar() {
    return (
        <nav className="navbar">
            <h3 className="app--title">
            <img src= {Logo} alt = "" className="logo"/> Meme Generator
            </h3>
            <h4 className="sideTitle">
                React Course - Project 3
            </h4>
        </nav>
    )
}