import React, { useState } from 'react'
import task from './Data'

export default function List() {
    const [todoList, settodolist] = useState( task );
    const [newtask, setNewtask] = useState('')

    const HandleClick = () => {
        settodolist([...todoList, newtask]);
        setNewtask('');
    }
    const hadledelete = (value)=>{
        let filtered = todoList.filter((val)=>{
            if (val == value) return false;
            else return true; 
        })
        settodolist(filtered);
    }

    return (
        <>
            <div className='flex justify-center my-10 '>
                <ul className=''>
                    {todoList.map((val, ind) => (
                        <div key={ind} className='flex justify-center gap-10'>
                            <li>{val}</li>
                            <button style={{ border: "2px solid black" }} onClick={()=>{hadledelete(val)}}>Delete</button>
                        </div>
                    ))}
                </ul>
            </div>
            <div className='flex justify-center items-center'>
                <div>
                    <input value={newtask} type="text" placeholder='Enter the task' onChange={(e) => { setNewtask(e.target.value) }} />
                </div>
                <div>
                    <button onClick={() => { HandleClick() }} style={{ border: "2px solid black" }}>Add Task</button>
                </div>
            </div>
        </>
    )
}
