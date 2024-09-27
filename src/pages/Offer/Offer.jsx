import { Link } from "react-router-dom";
import "./Offer.css";
import UnicumLogo from "../../assets/logos/unicum_logo.svg";
import OfferImage from "../../assets/images/offer_image.png";
import { useDispatch } from "react-redux";
import { fetchLevels } from "../../features/levels/levelsSlice";
const HomePage = () => {
  const dispatch=useDispatch(); 
  const handleClick=()=>{
      dispatch(fetchLevels()); 
      
  }
  return (
    <div className="offer">
      <div className="container">
            <Link className="offer_link" to="/">
                <img className="offer_logo" src={UnicumLogo} alt="Unicum logo" />
            </Link>
            <img className="offer_img" src={OfferImage} alt="Offer Image" />
            <h1 className="offer_title">Хотите пройти тест
              другого уровня?</h1>
            <p className="offer_text">Мы можем предложить вам пройти тест на более сложный или более легкий уровень</p>
            <Link to="/degree"><button onClick={()=>handleClick()} className="offer_next_button">Да, хочу</button></Link>
            <Link to="https://t.me/unicum_academy_bot?start=reload"><button className="offer_prev_button">Нет, спасибо</button></Link>
      </div>
    </div>
  )
}

export default HomePage
