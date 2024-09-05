import { useState } from "react";
import Todoitem from "./Todoitem";

export default function Todo() {
  const [Todo, settodo] = useState("");
  const [todos, settodos] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    settodos([...todos, Todo]);
    settodo("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={Todo}
          onChange={(e) => settodo(e.target.value)}
        />
        <button>ADD</button>
      </form>
      {todos.map((item) => (
        <Todoitem key={item} item={item}/>
      ))}
    </div>
  );
}
