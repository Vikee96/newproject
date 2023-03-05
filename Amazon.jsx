import React from "react";
import Alogo from './Alogo';
import Amenu from './Amenu';
import STYLE from "./amazon.module.css"
const Amazon=()=>{
    return(
  <>
  <div className={STYLE.amaz}>
  <Alogo/>
  <Amenu/>
  </div>
  </>
    )
}
export default Amazon