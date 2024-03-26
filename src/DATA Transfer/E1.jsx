import React from 'react'
import E2 from './E2'

export default function E1(props) {
  return (
    <div>
        <h1>This is element 1</h1>
        <E2 getdata={props.getdata} FromE2={(data)=>{props.FromE2(data)}} />
    </div>
  )
}
