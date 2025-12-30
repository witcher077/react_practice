import { useContext, useState } from "react";
import { UserContext } from "./Context/userContext";

function App() {
  const [count, setCount] = useState(0);
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <h1>Vite + React</h1>

      <button onClick={() => setCount(count + 1)}>
        count is {count}
      </button>

      <p>
        User Name: <strong>{user.name}</strong>
      </p>

      <p>
        Profession: <strong>{user.profession}</strong>
      </p>
    </>
  );
}

export default App;
