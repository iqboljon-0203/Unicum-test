import { Link } from "react-router-dom";
import "./Home.css";
import UnicumLogo from "../../assets/logos/unicum_logo_white.svg";
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
                  <img
                      className="home_logo"
                      src={UnicumLogo}
                      alt="Unicum logo"
                  />
              </Link>
              <h1 className="home_title">Xush kelibsiz!</h1>
              <p className="home_text">
                  Sizga mos kurslarni taklif qilishimiz uchun bilim darajangizni
                  aniqlang
              </p>
              <Link to="/questionnaire">
                  <button
                      onClick={() => buttonClicked()}
                      className="home_button"
                  >
                      Testdan o’tish
                  </button>
              </Link>
          </div>
      </div>
  );
}

export default HomePage
