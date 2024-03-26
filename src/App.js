import { useState } from 'react';
import './App.css';
import C1 from './DATA Transfer/C1';
import E1 from './DATA Transfer/E1';


function App() {
  const [getdata,setgetdata] = useState("")
  const [ele2,setele2] = useState("")
  return (
    <>
      {/* <C1 trans={(data) => { setgetdata(data) }} FromE2={ele2} />
      <E1 getdata={getdata} FromE2={(data)=>{setele2(data)}} /> */}
      
    </>
  );
}

export default App;
