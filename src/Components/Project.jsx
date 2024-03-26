import React, { useState } from 'react'
import ButtonPanel from './ButtonPanel'
import Gallery from './Gallery'


export default function Project() {

  const [Getdata,setGetdata] = useState("All");

  return (
    <div className='container mx-auto'>
        <ButtonPanel data={(request)=>{setGetdata(request)}} />
        <Gallery Getdata={Getdata} />
    </div>
  )
}
