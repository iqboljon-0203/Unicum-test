import { Link } from 'react-router-dom';
import UnicumLogo from '../../assets/logos/unicum_logo.svg';
import HandLeft from '../../assets/logos/hand_left.svg';
import HandSelectedBeginner from '../../assets/logos/beginner.svg';
import HandSelectedIntermediate from '../../assets/logos/intermediate.svg';
import HandSelectedAdvanced from '../../assets/logos/advanced.svg';
import HandSelectedElementary from '../../assets/logos/elementary.svg';
import HandSelectedPreIntermediate from '../../assets/logos/pre-intermediate.svg';
import HandSelectedUpperIntermediate from '../../assets/logos/upper-intermediate.svg';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setClickedLevel } from '../../features/clickedLevel/clickedLevelSlice';
import './Degree.css';
import { postSelectedLevel } from '../../features/postSelectedLevel/postSelectedLevelSlice';
const Degree = () => {
    const dispatch = useDispatch();

    const [selectedIndex, setSelectedIndex] = useState(null);
    
    const dispatchClickedLevel = useDispatch();
    const handleClick = (level) => {
        setSelectedIndex(level);
        dispatchClickedLevel(setClickedLevel(level));
    };
    const telegramId = useSelector((state) => state.telegram.telegramId); //telegram id
    const clickedLevel = useSelector(
        (state) => state.clickedLevel.clickedLevel //tanlangan level
    );

    const buttonClicked = () => {
        const requestData = {
            telegramId: telegramId, // Buni kerakli joydan dinamik ravishda olish mumkin
            level: clickedLevel,
        };
        dispatch(postSelectedLevel(requestData)); // post zapros
        
    };

    const { levels, status, error } = useSelector((state) => state.levels);
    console.log(levels.levels);
    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }

    const images = [
        HandSelectedBeginner,
        HandSelectedElementary,
        HandSelectedPreIntermediate,
        HandSelectedIntermediate,
        HandSelectedUpperIntermediate,
        HandSelectedAdvanced,
    ];

    const degrees = levels.levels
        ? levels.levels.map((degree) => ({
              label: degree.label,
              img:
                  selectedIndex === degree.label
                      ? images.find((item) =>
                            item.includes(degree.label.toLowerCase())
                        )
                      : HandLeft,
          }))
        : [];
    return (
        <div className="degree">
            <div className="container">
                <Link className="degree_link" to="/">
                    <img
                        className="degree_logo"
                        src={UnicumLogo}
                        alt="Unicum logo"
                    />
                </Link>
                <h1 className="degree_title">Выберите ваш уровень</h1>
                <p className="degree_text">
                    Пожалуйста, выберите один из предложенных уровней для начала
                    теста
                </p>
                <ul className="degree_list">
                    {degrees.map((degree, index) => (
                        <li
                            key={index}
                            className="degree_item"
                            onClick={() => handleClick(degree.label)}
                            style={{
                                backgroundColor:
                                    selectedIndex === degree.label
                                        ? '#FFD648'
                                        : '#EFEFEF', // Change this color as needed
                                cursor: 'pointer',
                                // Add some padding for better clickability
                            }}
                        >
                            <p className="degree_item_text">{degree.label}</p>
                            <img
                                src={degree.img}
                                className="degree_item_img"
                                alt={`${degree.label} icon`}
                            />
                        </li>
                    ))}
                </ul>
                <Link to="/test">
                    <button
                        onClick={() => buttonClicked()}
                        className="degree_button"
                    >
                        Начать тест
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Degree;
