import React from 'react'
import C2 from './C2'

export default function C1(props) {
  return (
    <div>
        <h1>This is Component 1</h1>
        <C2 trans={(data)=>{props.trans(data)}} FromE2={props.FromE2} />
        <h1>{props.FromE2}</h1>
    </div>
  )
}
