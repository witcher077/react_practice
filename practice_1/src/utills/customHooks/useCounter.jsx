import { useCallback, useState } from "react"

const useCounter = (initailCount = 0) => {

    const [count, setCount] = useState(initailCount)

    const increament = useCallback(() => {
        setCount((prev) => prev + 1)
    }, [])
    const decreament = useCallback(() => {
        setCount((prev) => prev - 1)
    }, [])

    return [count, increament, decreament]
}

export {useCounter};