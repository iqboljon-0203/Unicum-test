import { useEffect } from "react";
import TimerImage from "../../assets/logos/timer.svg";
const TestTimer = ({onTimeUp,timeLeft,setTimeLeft}) => {
 

  // Timerni ishga tushirish uchun `useEffect` dan foydalanamiz
  useEffect(() => {
    if (timeLeft === 0) {
      onTimeUp(); // Agar vaqt tugasa, `onTimeUp` funksiyasini chaqiramiz
      setTimeLeft(30);
      return;
    }

    const timerId = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timerId);
  }, [timeLeft, onTimeUp,setTimeLeft]);

  return (
    <div>
      <h3 style={{display:"flex",alignItems:"center"}}><img style={{width:"20px",height:"20px"}} src={TimerImage} alt="Timer logo"></img> <p>{timeLeft>=10 ? `00:${timeLeft}` : `00:0${timeLeft}`}</p></h3>
    </div>
  );
};

export default TestTimer;
