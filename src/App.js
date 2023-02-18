import React, {useState} from "react";
import "./style.css";

export default function App() {
  let [count, setCount]= useState(0)
  setInterval(()=>{
    return setCount(count = count+1)
  },1000)
  
  return (
    <div>
       <p>{count}</p>
    </div>
  );
}
