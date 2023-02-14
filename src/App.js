import React, {useState} from "react";
import "./style.css";

export default function App() {
    let [bio, setBio] = useState('')
    return (
      <div>

        <textArea value={bio} onChange={(e)=>{setBio(e.target.value)}}>
        </textArea><br/>

        <button onClick={ ()=>{
               let newBio= bio
               setBio(newBio.toUpperCase())}}>Submit</button>

        <p>{bio}</p>
        
      </div>
    )
}
