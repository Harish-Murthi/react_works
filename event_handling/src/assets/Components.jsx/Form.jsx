import { useState } from "react";

export default function Form(){
    const [name,setname]=useState("")
    return <div>
  <form>
    <input type="text" value={name}    onChange={ (e) =>{
        setname(e.target.value)
    }}/>
  </form>





    </div>;
}