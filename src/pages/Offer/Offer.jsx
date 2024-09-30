import { Link } from "react-router-dom";
import "./Offer.css";
import UnicumLogo from "../../assets/logos/unicum_logo_white.svg";
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
                  <img
                      className="offer_logo"
                      src={UnicumLogo}
                      alt="Unicum logo"
                  />
              </Link>
              <h1 className="offer_title">
                  Boshqa darajadagi testni o'tmoqchimisiz?
              </h1>
              <p className="offer_text">
                  Sizga qiyinroq yoki osonroq darajadagi testni taklif
                  qilishimiz mumkin
              </p>
              <Link to="/degree">
                  <button
                      onClick={() => handleClick()}
                      className="offer_next_button"
                  >
                      Ha, albatta
                  </button>
              </Link>
              <Link to="https://t.me/unicum_academy_bot?start=reload">
                  <button className="offer_prev_button">Yo’q, rahmat</button>
              </Link>
          </div>
      </div>
  );
}

export default HomePage
