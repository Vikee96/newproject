import React from "react";
import Style from "./netflix.module.css"
import Nlogo from './Nlogo';
import Nmenu from './Nmenu';
const Netflix=()=>{
return(
    <>
    <div className={Style.Net}>
    <Nlogo/>
    <Nmenu/>
    </div>
    </>
)
}
export default Netflix