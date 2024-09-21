import { Link } from "react-router-dom";
import "./Home.css";
import UnicumLogo from "../../assets/logos/unicum_logo.svg";
import HomeImage from "../../assets/images/home_image.png";
const HomePage = () => {
  return (
    <div className="home">
      <div className="container">
            <Link className="home_link" to="/">
                <img className="home_logo" src={UnicumLogo} alt="Unicum logo" />
            </Link>
            <img className="home_img" src={HomeImage} alt="Home Image" />
            <h1 className="home_title">Добро пожаловать
            в наш тест!</h1>
            <p className="home_text">Определите ваш уровень знаний, чтобы мы могли предложить вам подходящие курсы</p>
            <Link to="/degree"><button className="home_button">Пройти тест</button></Link>
      </div>
    </div>
  )
}

export default HomePage
