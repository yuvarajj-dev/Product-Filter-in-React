import React from 'react'
import C3 from './C3'

export default function C2(props) {
  return (
    <div>
        <h1>This Component 2</h1>
        <h1>{props.FromE2}</h1>
        <C3 trans={(data)=>{props.trans(data)}} />
      
    </div>
  )
}
