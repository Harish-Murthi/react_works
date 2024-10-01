import { createContext, useState } from "react";
import Checkout from "./Checkout";
import Login from "./Login";
export const userContext=createContext()
function App(){
  const[user,setuser]=useState("guest")

  
  return <div>
 
     <userContext.Provider value={{user ,setuser}}>  <Checkout/>
     <Login /></userContext.Provider>
      </div>
}
export default App;