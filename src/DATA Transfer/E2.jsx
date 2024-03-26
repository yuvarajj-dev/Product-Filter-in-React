import React, { useState } from 'react'
import E3 from './E3'

export default function E2(props) {
    const [ele2,setele2] = useState("This From Element 2")
  return (
    <div>
        <h1 >This is Element 2</h1>
        <button onClick={()=>{props.FromE2(ele2)}}>Click here to transfer the data to componet 2    </button>
        <E3 getdata={props.getdata} />
    </div>
  )
}
