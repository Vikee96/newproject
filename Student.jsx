import React from 'react'

const Student = (props) => {
   let data=props.data
    return (
  <>
  <div style={{backgroundColor:"yellowgreen",width:"340px"}} >
<table border="2px" style={{textAlign:"center",fontWeight:"bold"}}>
    <tr>
        <th>StdName</th>
        <th>StdId</th>
        <th>Course</th>
        <th>Photo</th>
        <th>Phone</th>
    </tr>
    {data.map((x)=>{
       return <tr>
         <th>{x.stdName}</th>
         <th>{x.stdId}</th>  
         <th>{x.course}</th> 
         <th><img src={x.Photo} alt=""height="50px" width="50px" /></th>
         <th><ul>{x.phone.map((x)=>{
            return <li>{x}</li>
         })}</ul></th>
        </tr>
    })}
</table>
</div>
</>
  )
}

export default Student