import Link from "next/link";
import React from "react";
import "./styles.css"

const Navbar = () => {
    return (
        <div className="navbar">
            <h1>
                <Link href={"/"}>
                    WEBSITE
                </Link>

            </h1>
            <ul>
                <li><Link href={"/"}>Home</Link></li>
                <li><Link href={"/components/about"}>About</Link></li>
                <li><Link href={"/components/contact"}>Contact</Link></li>
            </ul>
            <h2>
                ☰
            </h2>
        </div>

    )
}
export default Navbar;