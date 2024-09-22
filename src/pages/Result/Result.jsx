import { Link } from "react-router-dom";
import "./Result.css";
import UnicumLogo from "../../assets/logos/unicum_logo.svg";
import CupImage from "../../assets/logos/cup.svg";
import Confetti from "react-confetti";
import { useState } from "react";
const ResultPage = () => {
  const [showConfetti, setShowConfetti] = useState(true);
  return (
    <div className="result">
      <div className="container">
            {showConfetti && <Confetti />}
            <Link className="result_link" to="/">
                <img className="result_logo" src={UnicumLogo} alt="Unicum logo" />
            </Link>
            <img className="result_img" src={CupImage} alt="Cup icon" />
            <h1 className="result_title">Поздравляем с завершением теста!</h1>
            <p className="result_text">Ниже представлен ваш результат, который поможет нам лучше определить ваш уровень подготовки</p>
            <ul className="result_list">
              <li className="result_item">
                <p className="result_item_number">20</p>
                <p className="result_item_info">Общее кол-во
                  вопросов</p>
              </li>
              <li className="result_item">
                <p className="result_item_number result_item_number_second">12</p>
                <p className="result_item_info">Правильных
                  ответов</p>
              </li>
              <li className="result_item">
                <p className="result_item_number result_item_number_third">8</p>
                <p className="result_item_info">Неправильных

                  ответов</p>
              </li>
            </ul>
            <Link to="/offer"><button onClick={() => setShowConfetti(false)} className="result_button">Завершить тест</button></Link>
      </div>
    </div>
  )
}

export default ResultPage