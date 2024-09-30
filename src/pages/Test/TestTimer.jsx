import { useEffect } from 'react';
import { memo } from 'react';
import TimerImage from '../../assets/logos/timer.svg';
import { useSelector, useDispatch } from 'react-redux';
import { decrementTimeLeft,resetTimeLeft } from '../../features/timeLeft/timeLeftSlice';
const TestTimer = ({onTimeUp}) => {
     const timeLeft = useSelector((state) => state.timeLeft.timeLeft); // Redux'dan qiymatni olish
     const dispatch = useDispatch();
    // Timerni ishga tushirish uchun `useEffect` dan foydalanamiz
    useEffect(() => {
        if (timeLeft === 0) {
            onTimeUp(); // Agar vaqt tugasa, `onTimeUp` funksiyasini chaqiramiz
            dispatch(resetTimeLeft());
            return;
        }

        const timerId = setTimeout(() => {
            dispatch(decrementTimeLeft());
        }, 1000);

        return () => clearTimeout(timerId);
    }, [onTimeUp, timeLeft,dispatch]);
    
    return (
        <div>
            <h3 style={{ display: 'flex', alignItems: 'center' }}>
                <img
                    style={{ width: '20px', height: '20px' }}
                    src={TimerImage}
                    alt="Timer logo"
                ></img>{' '}
                <p style={{ fontSize: '20px' }}>{timeLeft >= 10 ? `00:${timeLeft}` : `00:0${timeLeft}`}</p>
            </h3>
        </div>
    );
};

export default memo(TestTimer);
