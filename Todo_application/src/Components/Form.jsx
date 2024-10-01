import { useState } from "react";
import styles from './form.module.css'
export default function Form({ todos, settodos }) {
  const [todo, settodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    settodos([...todos, todo]);
    settodo("");
  }

  return (
    <form className={styles.todoform  } onSubmit={handleSubmit}>
      <div className={styles.inputcontainer}><input className={styles.moderninput}
        type="text" placeholder="Enter todo item..."
        value={todo}
        onChange={(e) => settodo(e.target.value)}
      />
      <button className={styles.modernbutton}>ADD</button></div>
      
    </form>
  );
}
