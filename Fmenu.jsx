import React from "react";
import STYLE from "./fmenu.module.css"
const Fmenu=()=>{
    return(
        <>
    <div id={STYLE.flips}>
        <ol>
            <li><input type="search" placeholder="search product" /></li>
            <li><a href="">Home</a></li>
            <li><a href="">Cart</a></li>
            <li><a href="">Notification</a></li>
            <li><a href="">Account</a></li>
            <li><a href="">Category</a></li>
        </ol>
    </div>
        </>
    )
}
export default Fmenu