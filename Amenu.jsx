import React from "react";
import STYLE from "./amenu.module.css"
const Amenu=()=>{
    return(
        <>
        <div id={STYLE.amazs}>
            <ol>
                <li><a href="">Sign in</a></li>
                <li><a href="">Category</a></li>
                <li><input type="search" placeholder="Search Amazon.in" /></li>
                <li><a href="">Wish list</a></li>
                <li><a href="">Deals</a></li>
                <li><a href="">Sell</a></li>

            </ol>
        </div>
        </>
    )
}
export default Amenu