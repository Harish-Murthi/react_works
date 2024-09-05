import { useState } from "react";

export default function Form() {
  const [name, setname] = useState({firstname: "",lastname: "" });

  function Submit(e) {
    e.preventDefault()
    console.log(name)
  }
  return (
    <div>
      {name.firstname} {name.lastname}
      <form>
        <input
          type="text"
          value={name.firstname}
          onChange={(e) => setname({firstname: e.target.value})}
        />
        <input
          type="text"
          value={name.lastname}
          onChange={(e) => setname({...name,lastname: e.target.value})}
        />
        <button onClick={(e)=>Submit(e)}>Add</button>
      </form>
    </div>
  );
}
