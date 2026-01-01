import React, { useRef, useState } from 'react'

const StopWatch = () => {

    const [timer, setTimmer] = useState({ hr: 0, Min: 0, sec: 0 })

    let timerId = useRef(null);
    const handleStartTimer = () => {
        if (timerId.current) return;
          let { hr, Min, sec} = timer;
        timerId.current = setInterval(() => {
          
            sec += 1;
            if (sec == 60) {
                Min += 1
                sec=0
            }
            if (Min == 60) {
                hr += 1
                Min=0
            }
            setTimmer({ hr,Min,sec })
        }, 1000)
    }

    const stoptimer = () => {
        if (timerId.current){
               clearInterval(timerId.current)
               timerId.current=null
        
        }
         
    }

    const reset = () => {
        if (timerId.current) {
            clearInterval(timerId.current)
            timerId.current=null
        }
        setTimmer({ hr: 0, Min: 0, sec: 0 })

    }
console.log(timer)

    return (
        <div>
            <div><span>{timer.hr}</span> : <span>{timer.Min}</span> : <span>{timer.sec}</span> </div>
            <div><button onClick={handleStartTimer}>start</button> : <button onClick={stoptimer}>stop</button>  : <button onClick={reset}>reset</button>  </div>
        </div>
    )
}

export default StopWatch;