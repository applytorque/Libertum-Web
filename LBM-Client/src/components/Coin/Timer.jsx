import React, { useState, useEffect, useRef } from "react";
import css from "./Coin.module.scss";

const Timer = () => {


const [timerDays, setTimerDays] = useState('00');
const [timerHours, setTimerHours] = useState('00');
const [timerMinutes, setTimerMinutes] = useState('00');
const [timerSeconds, setTimerSeconds] = useState('00');

let interval = useRef();

const startTimer = () => {
  const contdownDate = new Date ('December 1, 2023, 00:00:00').getTime()

  interval = setInterval(() => {
    const now = new Date().getTime();
    const distance = contdownDate - now

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)); 
    const seconds = Math.floor((distance % (1000 * 60)) / 1000); 

    if (distance < 0){
      clearInterval(interval.current)
    } else {
      setTimerDays(days);
      setTimerHours(hours);
      setTimerMinutes(minutes);
      setTimerSeconds(seconds);
    }
  }, 1000);
}


useEffect (()=>{
  startTimer();
  return () => {
    clearInterval(interval.current)
  }
})

return( 

    <div className={css.timer}>
    <section>
        <p>{timerDays}</p>
        <p><small>Days</small></p>
      </section>
      <span>:</span>
    <section>
        <p>{timerHours}</p>
        <p><small>Hours</small></p>
      </section>
      <span>:</span>
      <section>
        <p>{timerMinutes}</p>
        <p><small>Minutes</small></p>
      </section>
      <span>:</span>
      <section>
        <p>{timerSeconds}</p>
        <p><small>Seconds</small></p>
      </section>
    </div>


)
}; 

export default Timer; 
