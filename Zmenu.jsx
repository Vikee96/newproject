import React from "react";
import STYLE from "./zmenu.module.css"
const Zmenu=()=>{
    return(
        <>
        <div id={STYLE.zoma}>
            <ol>
                <li><a href="">Delivery</a></li>
                <li><a href="">Dining</a></li>
                <li><a href="">Grocery</a></li>
                <li><a href="">Zomaland</a></li>
                <li><a href="">Money</a></li>
                <li><input type="search" placeholder="Search food" /></li>

            </ol>
        </div>
        </>
    )
}
export default Zmenu