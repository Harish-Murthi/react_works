import { useContext, useState } from "react";
import { userContext } from "./App";

export default function Login() {
  const handlesubmit = (e) => {
    e.preventDefault();
    setuser(value);
    setvalue(""); // Reset the input field
  };
  const [value, setvalue] = useState("");
  const { user, setuser } = useContext(userContext);
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => {
            setvalue(e.target.value);
          }}
        />
        <button type="submit">login</button>
      </form>
    </div>
  );
}
