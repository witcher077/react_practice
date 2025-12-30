import { useCallback, useEffect, useState } from "react";
import useDebounce from "./useDebounce";

function Page1() {
  const [inputval, setinputval] = useState('');


  const handleChange = useCallback(useDebounce((val) => {
    console.log(val)
  }, 5000), [])

  useEffect(() => {
    handleChange(inputval)
  }, [inputval])


  return (
    <>
      <input value={inputval} onChange={(e) => setinputval(e.target.value)} />
    </>
  );
}

export default Page1;
