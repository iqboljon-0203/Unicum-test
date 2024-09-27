import { Link } from "react-router-dom";
import "./Home.css";
import UnicumLogo from "../../assets/logos/unicum_logo.svg";
import HomeImage from "../../assets/images/home_image.png";
import { useDispatch,useSelector } from 'react-redux';
import { useEffect } from "react";
import { setTelegramId } from "../../features/telegramId/telegramIdSlice";
import { fetchLevels } from "../../features/levels/levelsSlice";
const HomePage = () => {
  const dispatch=useDispatch();
  
  useEffect(() => {
     const searchParams = new URLSearchParams(window.location.search);
      const idFromUrl = searchParams.get('telegramId');
      if (idFromUrl) {
      // Redux state'ga telegramId ni yozish
      dispatch(setTelegramId(idFromUrl));
    }
  },[dispatch])
   const {  status } = useSelector((state) => state.levels);

  
  const buttonClicked=()=>{
    if (status === 'idle') {
        dispatch(fetchLevels());
    }
  }
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
            <Link to="/degree"><button onClick={()=>buttonClicked()} className="home_button">Пройти тест</button></Link>
      </div>
    </div>
  )
}

export default HomePage
