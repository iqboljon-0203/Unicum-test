import "./Test.css";
import { Link } from "react-router-dom";
import TestNumberOne from "../../assets/logos/test1.svg";
import TestNumberTwo from "../../assets/logos/test2.svg";
import TestNumberThree from "../../assets/logos/test3.svg";
import TestNumberFour from "../../assets/logos/test4.svg";

import TestSelectedCorrect from "../../assets/logos/correct.svg";
import TestSelectedWrong from "../../assets/logos/wrong.svg";
import  { useState } from 'react';

const Test = () => {
   const [selectedIndex, setSelectedIndex] = useState(null);
    const handleClick = (index) => {
    setSelectedIndex(index);
  };
  const degrees = [
    { label: 'Test1', img: selectedIndex === 0 ?TestSelectedCorrect : TestNumberOne },
    { label: 'Test2', img: selectedIndex === 1 ? TestSelectedWrong : TestNumberTwo },
    { label: 'Test3', img: selectedIndex === 2 ? TestSelectedCorrect : TestNumberThree },
    { label: 'Test4', img: selectedIndex === 3 ? TestSelectedWrong : TestNumberFour },
  ];
  return (
      <div className="test">
        <div className="container">
          <h1 className="test_title">Upper-Inter</h1>
          <p className="test_text">Тест на уровень Upper-Inter</p>
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
          <Link to="/test"><button className="test_next_button">Следующий вопрос</button></Link>
          <Link to="/test"><button className="test_prev_button">Предыдущий вопрос</button></Link>
        </div>
      </div>
  )
}

export default Test
