import { useContext, useState } from "react";
import { UserContext } from "./utills/Context/userContext";
import Page1 from "./utills/customHooks/page";
import StopWatch from "./components/stopwatch/stopWatch"
import Autocompete from "./components/AutoComplete/autocompleteComp"

function App() {
  const [inputval, setinputval] = useState('');
  const [printval, setPrintval] = useState('')
  const { user, setUser } = useContext(UserContext);

  return (
    <>
    {/* <StopWatch/> */}
    {/* <Page1/> */}
    <Autocompete/>
      {/* <p>
        User Name: <strong>{user.name}</strong>
      </p>

      <p>
        Profession: <strong>{user.profession}</strong>
      </p> */}
    </>
  );
}

export default App;
