import { useReducer, useState } from "react";

function App() {

  const [state, dispatch] = useReducer(reducer,{count:0,increment:1});
  function reducer(state, action) {
    if (action.type == "increment") {
      return {...state,count:state.count + state.increment}
    }
    if(action.type=="decrement"){
      return {...state,count:state.count - state.increment}
    }
    if(action.type=="setincrement"){
      return {...state,increment:action.payload}
    }
  }
  return (
    <div>
     
    {state.count}
      <input value={state.increment} onChange={(e)=>dispatch({type:"setincrement",payload:Number(e.target.value)})}></input>
      <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
        increment count
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>
        decrement count
      </button>
    </div>
  );
}
export default App;
