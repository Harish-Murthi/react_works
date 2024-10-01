import Todoitem from "./Todoitem";
import styles from "./todolist.module.css";

export default function Todolist({ todos,settodos }) {
  return (
    <div className={styles.list}>
      {todos.map((item, index) => (
        <Todoitem key={index} item={item} todos={todos} settodos={settodos}/>
      ))}
    </div>
  );
}
