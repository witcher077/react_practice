import { useCallback, useEffect, useState } from "react";
import useDebounce from "./useDebounce";
import {useCounter} from "./useCounter"

function Page1() {
  const [inputval, setinputval] = useState('');
  const [count, increament, decreament]= useCounter(0);


  const handleChange = useCallback(useDebounce((val) => {
    console.log(val)
  }, 5000), [])

  useEffect(() => {
    handleChange(inputval)
  }, [inputval])


  return (
    <>
      <input value={inputval} onChange={(e) => setinputval(e.target.value)} />
      <button onClick={increament}>increament</button><span>{count}</span><button onClick={decreament}>decreament</button>
    </>
  );
}

export default Page1;
