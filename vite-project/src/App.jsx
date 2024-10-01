import { useRef } from "react";
import React from "react";

export default function App() {
  const inputele = useRef();


  function handleclick() {
    console.log(inputele.current)
    inputele.current.style.width="300px"
    inputele.current.focus()
  }
  return (
    <div>
      <input type="text" ref={inputele} />
      <button onClick={handleclick}>Click me</button>
    </div>
  );
}
