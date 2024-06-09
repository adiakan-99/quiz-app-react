import React, { useContext, useEffect, useState } from 'react'
import { myBasket } from '../App';

function Timer() {
    const [ minutes, setMinutes ] = useState(5);
    const [ seconds, setSeconds ] = useState(0);
    const { stage } = useContext(myBasket);

    useEffect(function () {
        const countdown = setInterval(function() {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            } else if (minutes > 0) {
                setSeconds(59);
                setMinutes(minutes - 1);
            }

            if (minutes === 0 && seconds === 0)  {
                timeOver();
            }
            
        }, 1000)



        return () => clearInterval(countdown);
    }, [minutes, seconds])

    function timeOver() {
        alert("Your time is up!");
        stage("result")
    }

    return (
        <div style={{backgroundColor: "lightblue", border: "3px solid darkblue", width: "100px", textAlign: "center", paddingTop: "2px", margin: "20px 550px", color: "blue"}}>
            <h5>{minutes < 10 ? `0${minutes}` : minutes} : {seconds < 10 ? `0${seconds}` : seconds}</h5>
        </div>
    )
}

export default Timer