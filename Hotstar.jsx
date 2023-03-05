import React from "react";
import Hlogo from './Hlogo';
import Hmenu from './Hmenu';
import STYLE from "./hotstar.module.css"
 const Hotstar=()=>{
   return(
      <>
      <div className={STYLE.hotblock}>
     <Hlogo/>
     <Hmenu/>
     </div>
     </>
   )
 }
 export default Hotstar