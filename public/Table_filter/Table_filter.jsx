import React, { useState } from 'react';
import "./Table.css";
import details from './Tabeldata';

export default function Table_filter() {

    const [data, setData] = useState(details)
    const [name, setname] = useState("")
    const [age, setage] = useState("")
    const [phone, setphone] = useState("")
    const [password, setpassword] = useState("")

    const HandelDelete = (val_data) => {
        let filterdata = data.filter((val) => {
            if (val == val_data) {
                return false;
            } else {
                return true;
            }
        })
        setData(filterdata)
    }
    const HandleClick = () =>{
        const newdetails = {
            name: name,
            age: age,
            phone:phone,
            password: password,
        }
        setData([...data,newdetails]);

        
        setname(" ")
        setage(" ")
        setphone(" ")
        setpassword(" ")
    }
    return (
        <>
            <div className='flex justify-center'>
                <div className='input-field'>
                    <div>
                        <input onChange={(e)=>{setname( e.target.value)}} type="text" placeholder='Enter Name' value={name}  className='input' />
                    </div>
                    <div>
                        <input onChange={(e)=>{setage( e.target.value)}} type="number" placeholder='Enter Age' value={age}  className='input' />
                    </div>
                    <div>
                        <input onChange={(e)=>{setphone( e.target.value)}} type="number" placeholder='Enter Phone' value={phone} className='input' />
                    </div>
                    <div>
                        <input onChange={(e)=>{setpassword( e.target.value)}} type="password" placeholder='Enter Password' value={password} className='input' />
                    </div>
                </div>
            </div>
            <div className='my-6 flex justify-center w-full'>
                <button onClick={()=>{HandleClick()}} class="button ">
                    <span>Add</span>
                </button>
            </div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Age
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Phone
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Password
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <span className="sr-only"></span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((val, ind) => (
                                <tr key={ind} className="bg-white border-b  hover:bg-gray-50 ">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        {val.name}
                                    </th>
                                    <td className="px-6 py-4">
                                        {val.age}
                                    </td>
                                    <td className="px-6 py-4">
                                        {val.phone}
                                    </td>
                                    <td className="px-6 py-4">
                                        {val.password}
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={() => { HandelDelete(val) }}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

        </>
    )
}
