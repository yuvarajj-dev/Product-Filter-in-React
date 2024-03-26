import React from 'react'
import { useState } from 'react'

export default function C3(props) {
    const [data,setdata] = useState("This is from component 3")
    
  return (
    <div>
        <h1>This is Component 3</h1>
        <button onClick={()=>{(props.trans(data))}}>click Here to Transfer to element 3</button>
    </div>
  )
}
