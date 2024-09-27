import { configureStore} from '@reduxjs/toolkit';
import levelsReducer from '../features/levels/levelsSlice';
import telegramIdReducer from '../features/telegramId/telegramIdSlice';
import clickedLevelReducer from '../features/clickedLevel/clickedLevelSlice';
import postSelectedLevelReducer from '../features/postSelectedLevel/postSelectedLevelSlice';
import timeLeftReducer from '../features/timeLeft/timeLeftSlice';
import testAnswersReducer from '../features/testAnswer/testSessionSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // `localStorage` bilan ishlaydi
const persistConfig = {
    key: 'root',
    storage,
    // bu yerda serializable bo'lmagan qiymatlarni e'tiborsiz qoldirish mumkin:
    blacklist: ['nonSerializableSlice'], // Bu yerga serialize qilinmasligi kerak bo'lgan slice'ni qo'shing
};
//Persist qilingan reducerlar
const persistedlevelsReducer = persistReducer(persistConfig, levelsReducer);
const persistedtelegramIdReducer = persistReducer(
    persistConfig,
    telegramIdReducer
);
const persistedclickedLevelReducer = persistReducer(
    persistConfig,
    clickedLevelReducer
);
const persistedpostSelectedLevelReducer = persistReducer(
    persistConfig,
    postSelectedLevelReducer
);
const persistedtimeLeftReducer = persistReducer(persistConfig, timeLeftReducer);
const persistedtestAnswersReducer = persistReducer(
    persistConfig,
    testAnswersReducer
);

const store = configureStore({
    reducer: {
        levels: persistedlevelsReducer,
        telegram: persistedtelegramIdReducer,
        clickedLevel: persistedclickedLevelReducer,
        postSelectedLevel: persistedpostSelectedLevelReducer,
        timeLeft: persistedtimeLeftReducer,
        testAnswer: persistedtestAnswersReducer,
        
    },
});
const persistor = persistStore(store);
export  {store,persistor};
