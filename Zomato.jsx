import React from "react";
import Zlogo from './Zlogo';
import Zmenu from './Zmenu';
import STYLE from "./zomato.module.css"
const Zomato=()=>{
    return(
        <>
        <div className={STYLE.zom}>
           <Zlogo/>
           <Zmenu/>
           </div>
           </>
    )
}
export default Zomato