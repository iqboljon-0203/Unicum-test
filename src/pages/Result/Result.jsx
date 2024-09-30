import { Link } from 'react-router-dom';
import './Result.css';
import UnicumLogo from '../../assets/logos/unicum_logo_white.svg';
import CupImage from '../../assets/logos/cup.svg';
import UpsetFaceImage from "../../assets/logos/upset.svg"
import Confetti from 'react-confetti';
import { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { clearTestSession } from '../../features/testAnswer/testSessionSlice';
const ResultPage = () => {
    const [showConfetti, setShowConfetti] = useState(true);
    const dispatch = useDispatch();
    const { data } = useSelector((state) => state.testAnswer);
    
    const handleClick = () => {
        setShowConfetti(false);
        dispatch(clearTestSession())  
    };
    return (
        <div className="result">
            <div className="container">
                {data.testSession.correctAnswers>=15?showConfetti&&<Confetti/>:null}
                <Link className="result_link" to="/">
                    <img
                        className="result_logo"
                        src={UnicumLogo}
                        alt="Unicum logo"
                    />
                </Link>
                <img
                    className="result_img"
                    src={
                        data.testSession.correctAnswers >= 15
                            ? CupImage
                            : UpsetFaceImage
                    }
                    alt="Cup icon"
                />
                <h1 className="result_title">
                    {data.testSession.correctAnswers >= 15
                        ? 'Tabriklaymiz, siz bizning testimizni muvaffaqiyatli topshirdingiz'
                        : "Afsuski, siz testdan o'ta olmadingiz."}
                </h1>
                <p className="result_text">
                    {data.testSession.correctAnswers >= 15
                        ? 'Biz sizning bilim darajangizni aniqladik va bundan keyin qaysi bosqichni tanlashingiz kerakligini bilamiz. Ajoyib natija!'
                        : "Xavotir olmang! Siz hali ham bilimlaringizni yaxshilash va yana urinib ko'rish imkoniyatiga egasiz. Biz sizga yordam berishga tayyormiz"}
                </p>
                <ul className="result_list">
                    <li className="result_item">
                        <p className="result_item_number">
                            {data && data.testSession.totalQuestions}
                        </p>
                        <p className="result_item_info">
                            Savollarning umumiy soni
                        </p>
                    </li>
                    <li className="result_item">
                        <p className="result_item_number ">
                            {data && data.testSession.correctAnswers}
                        </p>
                        <p className="result_item_info">To'g'ri javoblar</p>
                    </li>
                    <li className="result_item">
                        <p className="result_item_number">
                            {data &&
                                data.testSession.totalQuestions -
                                    data.testSession.correctAnswers}
                        </p>
                        <p className="result_item_info">Noto'g'ri javoblar</p>
                    </li>
                </ul>
                <Link to="/offer">
                    <button
                        onClick={() => handleClick()}
                        className="result_button"
                    >
                        Testni yakunlash
                    </button>
                </Link>
                {data.testSession.correctAnswers < 15 ? (
                    <Link to="/home">
                        <button className="back_button">
                            Uy sahifasiga qaytish
                        </button>
                    </Link>
                ) : null}
            </div>
        </div>
    );
};

export default ResultPage;
