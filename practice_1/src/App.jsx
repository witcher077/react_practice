import { useCallback, useContext, useEffect, useState } from "react";
import { UserContext } from "./utills/Context/userContext";
import useDebounce from "./utills/customHooks/useDebounce";

function App() {
  const [inputval, setinputval] = useState('');
  const [printval, setPrintval] = useState('')
  const { user, setUser } = useContext(UserContext);

  const handleChange = useCallback(useDebounce((val) => {
    console.log(val)
  }, 5000), [])

  useEffect(() => {
    handleChange(inputval)
  }, [inputval])


  return (
    <>
      <h1>Vite + React </h1>
      <input value={inputval} onChange={(e) => setinputval(e.target.value)} />

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
