import { useState } from 'react';
import Heading from './comp/Heading'
import List from './comp/List'

import './App.css'

function App() {
  let data=["C","1","2","+","3","4","-","5","6","*","7","8","/","=","9","0","."];
  let [actual,setdata]=useState("");
  let method=(item)=>{
      if(item=='C')
      {
         setdata("");
      }
      else if(item=='=')
      {
    
        setdata(eval(actual))
      }
      else{
        let dat=actual+item;
        setdata(dat);
      }
  }
  return (
   <div className='container'>
      <Heading actual={actual}></Heading>
      <List method={(item,event)=>method(item)} value={data}></List>
   </div>
  )
}

export default App
