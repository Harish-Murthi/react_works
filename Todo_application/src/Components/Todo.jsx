import { useState } from "react";
import Todoitem from "./Todoitem";
import Form from "./Form";
import Todolist from "./Todolist";

export default function Todo() {
  const [todos, settodos] = useState([]);

  return (
    <div>
      <Form todos={todos} settodos={settodos} />
      <Todolist todos={todos}  settodos={settodos}/>
    </div>
  );
}
