import "./Test.css";
import { Link } from "react-router-dom";
import TestNumberOne from "../../assets/logos/test1.svg";
import TestNumberTwo from "../../assets/logos/test2.svg";
import TestNumberThree from "../../assets/logos/test3.svg";
import TestNumberFour from "../../assets/logos/test4.svg";

import TestSelectedCorrect from "../../assets/logos/correct.svg";
import TestSelectedWrong from "../../assets/logos/wrong.svg";
import  { useState} from 'react';
import { useNavigate } from "react-router-dom";
import TestTimer from "./TestTimer";
const Test = () => {
     const [timeLeft, setTimeLeft] = useState(30);
   const [selectedIndex, setSelectedIndex] = useState(null);
   const navigate = useNavigate();
    const handleClick = (index) => {
    setSelectedIndex(index);
  };
  const degrees = [
    { label: 'Test1', img: selectedIndex === 0 ?TestSelectedCorrect : TestNumberOne },
    { label: 'Test2', img: selectedIndex === 1 ? TestSelectedWrong : TestNumberTwo },
    { label: 'Test3', img: selectedIndex === 2 ? TestSelectedCorrect : TestNumberThree },
    { label: 'Test4', img: selectedIndex === 3 ? TestSelectedWrong : TestNumberFour },
  ];
  const totalTests = 20; // Umumiy testlar soni
  const [currentTest, setCurrentTest] = useState(1); // Hozirgi test raqami
  const handleNextTest = () => {  
      
    if (currentTest < totalTests) {
      setCurrentTest(currentTest + 1);
      setTimeLeft(30);
    }else{
        navigate("/result");
    }
  };

  const handlePreviousTest = () => {
    if (currentTest > 0) {
      setCurrentTest(currentTest - 1);
      setTimeLeft(30);
    }
  };

  const handleTimeUp = () => {
    // Agar vaqt tugasa, keyingi testga o‘tamiz yoki test tugaganini ko‘rsatamiz
    if (currentTest < 20) {
      setCurrentTest(currentTest + 1);
        
    } else {
      navigate("/result");
    }
  };
  // Progress foizini hisoblaymiz
  const progressPercentage = (currentTest / totalTests) * 100;
  return (
      <div className="test">
        <div className="container">
          <h1 className="test_title">Upper-Inter</h1>
            <div className="progress-bar-container">
                <div className="progress-bar" style={{ width: `${progressPercentage}%` }}></div>
            </div>
            <div style={{ display: "flex", alignItems: "center" ,justifyContent:"space-between",marginBottom:"40px",paddingRight:"10px",paddingLeft:"10px"}}>
                <h3 style={{color:"#989898"}}><span style={{color:"#FFD648",fontSize:"24px"}}>{currentTest}</span>/{totalTests}</h3>
                <TestTimer timeLeft={timeLeft} setTimeLeft={setTimeLeft} onTimeUp={handleTimeUp} />
            </div>
          <p className="test_question">Пожалуйста, выберите один из предложенных вариантов</p>
          <ul className="test_list">
            {degrees.map((degree, index) => (
              <li
                key={index}
                className="test_item"
                onClick={() => handleClick(index)}
                style={{
                  backgroundColor: selectedIndex === index ? "#D3D3D3" : "#EFEFEF",
                  // Change this color as needed
                }}
              >
                <img
                  className="test_img"
                  src={degree.img}
                  alt="Test Image"
                />
                <p className="test_label">{degree.label}</p>
              </li>
            ))}
          </ul>
          <Link to={currentTest===totalTests ? "/result" : "/test"}><button onClick={handleNextTest} disabled={currentTest > totalTests}  className="test_next_button">{currentTest===totalTests ? "Узнать результат" : "Следующий вопрос"}</button></Link>
          <Link><button  onClick={handlePreviousTest} disabled={currentTest === 0} className="test_prev_button">Предыдущий вопрос</button></Link>
        </div>
      </div>
  )
}

export default Test
