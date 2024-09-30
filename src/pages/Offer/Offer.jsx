import { Link } from "react-router-dom";
import "./Offer.css";
import UnicumLogo from "../../assets/logos/unicum_logo_white.svg";
import { useDispatch } from "react-redux";
import { fetchLevels } from "../../features/levels/levelsSlice";
import { useEffect } from "react";
const HomePage = () => {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(fetchLevels()); // fetchLevels funksiyasini ishga tushirish
    };
    // Web app'ni yopish funksiyasi
    const handleClose = () => {
        window.Telegram.WebApp.close();
    };

    // Skriptni qo'shish
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://telegram.org/js/telegram-web-app.js';
        script.async = true;
        document.body.appendChild(script);

        // O'chirish uchun tozalash funksiyasi
        return () => {
            document.body.removeChild(script);
        };
    }, []);
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
                    <button onClick={() => handleClose()} className="offer_prev_button">Yo’q, rahmat</button>
                </Link>
            </div>
        </div>
    );
}

export default HomePage
