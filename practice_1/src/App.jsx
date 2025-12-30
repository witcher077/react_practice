import { useContext, useState } from "react";
import { UserContext } from "./utills/Context/userContext";

function App() {
  const [inputval, setinputval] = useState('');
  const [printval, setPrintval] = useState('')
  const { user, setUser } = useContext(UserContext);



  return (
    <>
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
