import React from "react";
import STYLE from "./hmenu.module.css"
const Hmenu=()=>{
 return(
      <>
      <div id={STYLE.menu}>
     <ol>
    
     <li><a href="Tv">Tv</a></li>
     <li><a href="Sports">Sports</a></li>
     <li><a href="Movies">Movies</a></li>
     <li><a href="Disney">Disney+</a></li>
     <li><a href="KIds">Kids</a></li>
     </ol>
      </div>
      </>
 )
}
export default Hmenu