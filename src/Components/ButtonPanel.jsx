import React from 'react'
import "./Button.css"

export default function ButtonPanel(props) {
   
    const HandelClick = (request) => {
        props.data(request);
    }

    return (
        <div>
            <div className='xl:flex xl:w-full xl:justify-evenly
                            lg:flex lg:w-full lg:justify-evenly
                            md:flex md:w-full md:justify-evenly
                            sm:flex sm:w-full sm:justify-evenly py-10 btnp'>
                <button className='button-56' onClick={() => { HandelClick("All"); }}>All</button>             
                <button className='button-56' onClick={() => { HandelClick("All Watch"); }}>Smart Watch</button>
                <button className='button-56' onClick={() => { HandelClick("All Mobile"); }}>Mobile</button>
                <button className='button-56' onClick={() => { HandelClick("All OverEar"); }}>Ear Phones</button>
                <button className='button-56' onClick={() => { HandelClick("All Desktop"); }}>Loptop</button>
            </div>
        </div>
    )
}

