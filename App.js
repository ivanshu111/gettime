import react, { useState } from 'react'
import './App.css'

const App=()=>{
const state=useState();
let time=new Date().toLocaleTimeString();


let [count,setcount]=useState(time);

  const incnum=()=>{
let updatedtime=new Date().toLocaleTimeString();
setcount(updatedtime)
  }
return (
  <>
  <div className='content'>
    <h1 className='heading'>{count}</h1>
    <button className='btn' onClick={incnum}>Get Time</button>
    </div>
  </>
)
}
export default App;