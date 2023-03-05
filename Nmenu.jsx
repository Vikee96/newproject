import React from "react";
import STYLE from "./nmenu.module.css"
const Nmenu=()=>{
    return(
        <>
        <div id={STYLE.Nets}>
            <ol>
                <li><input type="search" placeholder="search here"/></li>
            <li><a href="">Home</a></li>
            <li><a href="">TvShow</a></li>
            <li><a href="">Movies</a></li>
            <li><a href="">RecentlyAdded</a></li>
            <li><a href="">MyList</a></li>
            </ol>
            </div>
        </>
    )
}
export default Nmenu