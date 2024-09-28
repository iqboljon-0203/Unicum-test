import { configureStore} from '@reduxjs/toolkit';
import levelsReducer from '../features/levels/levelsSlice';
import telegramIdReducer from '../features/telegramId/telegramIdSlice';
import clickedLevelReducer from '../features/clickedLevel/clickedLevelSlice';
import postSelectedLevelReducer from '../features/postSelectedLevel/postSelectedLevelSlice';
import timeLeftReducer from '../features/timeLeft/timeLeftSlice';
import testAnswersReducer from '../features/testAnswer/testSessionSlice';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    levels: levelsReducer,
    telegram: telegramIdReducer,
    clickedLevel: clickedLevelReducer,
    postSelectedLevel: postSelectedLevelReducer,
    timeLeft: timeLeftReducer,
    testAnswer: testAnswersReducer,
});



export const store = configureStore({
    reducer: rootReducer,
    devTools: true,
});
