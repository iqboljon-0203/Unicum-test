import './Test.css';
import { Link } from 'react-router-dom';
import TestNumberOne from '../../assets/logos/test1.svg';
import TestNumberTwo from '../../assets/logos/test2.svg';
import TestNumberThree from '../../assets/logos/test3.svg';
import TestNumberFour from '../../assets/logos/test4.svg';
import TestSelectedCorrect from '../../assets/logos/correct.svg';
import TestSelectedWrong from '../../assets/logos/wrong.svg';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TestTimer from './TestTimer';
import { useSelector, useDispatch } from 'react-redux';
import { postSelectedLevel } from '../../features/postSelectedLevel/postSelectedLevelSlice';
import { resetTimeLeft } from '../../features/timeLeft/timeLeftSlice';
import { addTestSessionId,addUserResponse,postTestSessionData } from '../../features/testAnswer/testSessionSlice';
const Test = () => {
    const navigate = useNavigate(); //navigate
    const dispatchTest = useDispatch(); // dispatch

    const telegramId = useSelector((state) => state.telegram.telegramId); //telegram id

    const clickedLevel = useSelector(
        (state) => state.clickedLevel.clickedLevel //tanlangan level
    );

    const { data } = useSelector((state) => state.postSelectedLevel); // backend data

    useEffect(() => {
        const requestData = {
            telegramId: telegramId, // Buni kerakli joydan dinamik ravishda olish mumkin
            level: clickedLevel,
        };
        dispatchTest(postSelectedLevel(requestData)); // post zapros
    }, [telegramId, dispatchTest, clickedLevel]);
    if(data){
        dispatchTest(addTestSessionId(data.testSessionId));
    }
    const { testSessionId, userResponses } = useSelector(
        (state) => state.testAnswer
    );
    
    const [selectedIndex, setSelectedIndex] = useState(null); // tanlangan index
    const [selectedOption, setSelectedOption] = useState(null); // tanlangan option
    const [questionId, setQuestionId] = useState(null);
    const handleClick = (index, key, questionId) => {
        setSelectedIndex(index); // clickedfunction
        setSelectedOption(key);
        setQuestionId(questionId);
    };

    console.log(data);
    console.log(questionId,selectedOption);
    
    
    // option rasmlari
    const images = [
        TestNumberOne,
        TestNumberTwo,
        TestNumberThree,
        TestNumberFour,
    ];

    const totalTests = 20; // Umumiy testlar soni
    // testlari stati
    const [currentTest, setCurrentTest] = useState(1); // Hozirgi test raqami

    // test tugaganda
    const handleNextTest = () => {
        if (currentTest < totalTests) {
            setCurrentTest(currentTest + 1);
            dispatchTest(addUserResponse({ questionId:questionId, answer:selectedOption }));
            dispatchTest(resetTimeLeft());
            setSelectedIndex(null);
            setDisabled(false);
        }else if (currentTest === totalTests) {
            
          dispatchTest(
              postTestSessionData({
                  testSessionId,
                  userResponses: [...userResponses, { questionId:questionId, answer:selectedOption }],
              })
          ); 
          navigate('/result');  
        }
         
    };
    // buttonDisabled
    const [disabled, setDisabled] = useState(false);
    // vaqt tugaganda
    const handleTimeUp = () => {
        // Agar vaqt tugasa, keyingi testga o‘tamiz yoki test tugaganini ko‘rsatamiz
        if (currentTest < 20) {
            setCurrentTest(currentTest + 1);
            dispatchTest(addUserResponse({ questionId:questionId, answer:selectedOption }));
            setSelectedIndex(null);
            setDisabled(false);
        } else if(currentTest===totalTests){
            dispatchTest(
                postTestSessionData({
                    testSessionId,
                    userResponses: [
                        ...userResponses,
                        { questionId:questionId, answer:selectedOption },
                    ],
                })
            );
            navigate('/result');  
        }
    };
    // option rasmlari uchun sanoq
    let count = -1;
    // Progress foizini hisoblaymiz
    const progressPercentage = (currentTest / totalTests) * 100;
    return (
        <div className="test">
            <div className="container">
                <h1 className="test_title">{clickedLevel}</h1>
                <div className="progress-bar-container">
                    <div
                        className="progress-bar"
                        style={{ width: `${progressPercentage}%` }}
                    ></div>
                </div>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '40px',
                        paddingRight: '10px',
                        paddingLeft: '10px',
                    }}
                >
                    <h3 style={{ color: '#989898' }}>
                        <span style={{ color: '#FFD648', fontSize: '24px' }}>
                            {currentTest}
                        </span>
                        /{totalTests}
                    </h3>
                    <TestTimer onTimeUp={handleTimeUp} />
                </div>
                {data && (
                    <>
                        <p className="test_question">
                            {data.questions[currentTest - 1].question}
                        </p>
                        <ul className="test_list">
                            {data.questions[currentTest - 1].options.map(
                                (variant, index) => {
                                    variant.value && count++;
                                    return (
                                        variant.value && (
                                            <button
                                                key={index}
                                                className={`test_item  ${selectedIndex === index && variant.key === 'a' ? 'correct' : selectedIndex === index && variant.key !== 'a' ? 'incorrect' : ''} ${(selectedIndex === 0 || selectedIndex) && variant.key === 'a' ? 'correct' : ''}`}
                                                onClick={() => {
                                                    handleClick(
                                                        index,
                                                        variant.key,
                                                        data.questions[
                                                            currentTest - 1
                                                        ].questionId
                                                    );
                                                    setDisabled(true);
                                                }}
                                                style={{
                                                    cursor: 'pointer',
                                                }}
                                                disabled={disabled}
                                            >
                                                <img
                                                    className="test_img"
                                                    src={
                                                        (selectedIndex ===
                                                            index &&
                                                            variant.key ===
                                                                'a') ||
                                                        ((selectedIndex === 0 ||
                                                            selectedIndex) &&
                                                            variant.key === 'a')
                                                            ? TestSelectedCorrect
                                                            : selectedIndex ===
                                                                    index &&
                                                                variant.key !==
                                                                    'a'
                                                              ? TestSelectedWrong
                                                              : images[count]
                                                    }
                                                    alt="Test Image"
                                                />
                                                <p className="test_label">
                                                    {variant.value}
                                                </p>
                                            </button>
                                        )
                                    );
                                }
                            )}
                        </ul>
                    </>
                )}

                <Link to={currentTest === totalTests ? '/result' : '/test'}>
                    <button
                        onClick={handleNextTest}
                        disabled={selectedIndex === null}
                        className="test_next_button"
                    >
                        {currentTest === totalTests
                            ? 'Узнать результат'
                            : 'Следующий вопрос'}
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Test;
