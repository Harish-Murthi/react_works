import styles from "./todoitem.module.css";
export default function Todoitem({ item ,todos,settodos}) {
    function handledelete(item){
        console.log("Delete the button",item)
        settodos( todos.filter((todo)=>todo!==item));
       

    }
  return (
    <div className={styles.itemName}>
      <div>{item}  <span>
        <button onClick={()=>handledelete(item)} className={styles.deletebutton}>x</button>
      </span></div>
     
      <hr className={styles.line} />
    </div>
  );
}
