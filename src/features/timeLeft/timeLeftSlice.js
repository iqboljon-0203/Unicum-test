import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    timeLeft: 30, // boshlang‘ich qiymat
};

const timeLeftSlice = createSlice({
    name: 'timeLeft',
    initialState,
    reducers: {
        setTimeLeft: (state, action) => {
            state.timeLeft = action.payload; // timeLeft qiymatini yangilash
        },
        decrementTimeLeft: (state) => {
            if (state.timeLeft > 0) {
                state.timeLeft -= 1; // timeLeft qiymatini kamaytirish
            }
        },
        resetTimeLeft: (state) => {
            state.timeLeft = 30; // timeLeft qiymatini qayta boshlash holatiga keltirish
        },
    },
});

// Reducer va action'larni eksport qilish
export const { setTimeLeft, decrementTimeLeft, resetTimeLeft } =
    timeLeftSlice.actions;
export default timeLeftSlice.reducer;
