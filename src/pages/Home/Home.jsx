import { Link } from "react-router-dom";
import "./Home.css";
import UnicumLogo from "../../assets/logos/unicum_logo.svg";
import HomeImage from "../../assets/images/home_image.png";
import { useState,useEffect } from 'react';
import { useLocation } from "react-router-dom";
const HomePage = () => {
  const [data, setData] = useState([]);
  const location = useLocation();
  
  const telegramId = new URLSearchParams(location.search).get('telegramId');
  
     useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://api.unicumacademy.uz/api/v1/users/levels/bot-user/?telegramId=${telegramId}`);
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.log("xato ketdi",error);
            } 
        };

        fetchData();
    }, [telegramId]);
    console.log(data);
    
  return (
    
    <div className="home">
      <div className="container">
            <Link className="home_link" to="/">
                <img className="home_logo" src={UnicumLogo} alt="Unicum logo" />
            </Link>
            {data.levels?.map((item)=>{
              return (
                <div key={item}>{item}</div>
              )
            })}
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
