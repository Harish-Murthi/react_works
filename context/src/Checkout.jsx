 

import { useContext } from "react";
import { userContext } from "./App"; // Assuming userContext is defined in a separate file named userContext.js

export default function Checkout() {
  const {user}= useContext(userContext);
  return <div> Checkout: {user} </div>;
}
