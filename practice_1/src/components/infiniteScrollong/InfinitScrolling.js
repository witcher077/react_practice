import React, { useRef, useState, useEffect } from 'react'

const InfinitScrolling = (func, delay) => {

  const [throteledVal, setThroteledVal] = useState()

  const startRef = useRef(Date.now())
  const now = Date.now();
  useEffect(() => {
    const timer = setTimeout(() => {

      if ((now - startRef.current) >= delay) {
        setThroteledVal()
        startRef.current = now
      }
    }, delay - (now - startRef.current.now))

    return () => { clearTimeout(timer) }
  }, [func, delay])

  return throteledVal;
}

export default InfinitScrolling;