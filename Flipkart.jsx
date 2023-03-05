import React from "react";
import Flogo from './Flogo';
import Fmenu from './Fmenu';
import STYLE from "./flipkart.module.css"
const Flipkart=()=>{
    return(
     <>
     <div className={STYLE.flip}>
     <Flogo/>
     <Fmenu/>
     </div>
     </>
    )
}
export default Flipkart