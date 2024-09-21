import { Link } from "react-router-dom";
import UnicumLogo from "../../assets/logos/unicum_logo.svg";
import HandLeft from "../../assets/logos/hand_left.svg";
import HandSelectedBeginner from "../../assets/logos/Beginner.svg";
import HandSelectedIntermediate from "../../assets/logos/inter.svg";
import HandSelectedAdvanced from "../../assets/logos/advanced.svg";
import HandSelectedElementary from "../../assets/logos/elementary.svg";
import HandSelectedPreIntermediate from "../../assets/logos/pre_inter.svg";
import HandSelectedUpperIntermediate from "../../assets/logos/upper.svg";
import  { useState } from 'react';
import "./Degree.css";
const Degree = () => {
   const [selectedIndex, setSelectedIndex] = useState(null);
    const handleClick = (index) => {
    setSelectedIndex(index);
  };
  const degrees = [
    { label: 'Beginner', img: selectedIndex === 0 ? HandSelectedBeginner : HandLeft },
    { label: 'Elementary', img: selectedIndex === 1 ? HandSelectedElementary : HandLeft },
    { label: 'Pre-Intermediate', img: selectedIndex === 2 ? HandSelectedPreIntermediate : HandLeft },
    { label: 'Intermediate', img: selectedIndex === 3 ? HandSelectedIntermediate : HandLeft },
    { label: 'Upper-Intermediate', img: selectedIndex === 4 ? HandSelectedUpperIntermediate : HandLeft },
    { label: 'Advanced', img: selectedIndex === 5 ? HandSelectedAdvanced : HandLeft },
  ];
  return (
     <div className="degree">
      <div className="container">
            <Link className="degree_link" to="/">
                <img className="degree_logo" src={UnicumLogo} alt="Unicum logo" />
            </Link>
            <h1 className="degree_title">Выберите
              ваш уровень</h1>
            <p className="degree_text">Пожалуйста, выберите один из предложенных уровней для начала теста</p>
            <ul className="degree_list">
               {degrees.map((degree, index) => (
        <li
          key={index}
          className="degree_item"
          onClick={() => handleClick(index)}
          style={{
            backgroundColor: selectedIndex === index ? '#FFD648' : '#EFEFEF', // Change this color as needed
            cursor: 'pointer',
             // Add some padding for better clickability
          }}
        >
          <p className="degree_item_text">{degree.label}</p>
          <img src={degree.img} className="degree_item_img" alt={`${degree.label} icon`} />
        </li>
      ))}
              
            </ul>
            <Link to="/test"><button className="degree_button">Начать тест</button></Link>
      </div>
    </div>
  )
}

export default Degree
