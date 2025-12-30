import React, { useCallback } from 'react'

const useDebounce = (func, delay) => {

    let timer;

    return useCallback(function (ctx) {

        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            func(ctx)
        }, delay)

    }, [])

}

export default useDebounce;