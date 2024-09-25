import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    clickedLevel: '', // Boshida bo'sh string
};

const clickedLevelSlice = createSlice({
    name: 'clickedLevel',
    initialState,
    reducers: {
        setClickedLevel: (state, action) => {
            state.clickedLevel = action.payload; // payload orqali yuborilgan stringni saqlash
        },
    },
});

// Reducerni export qilish
export const { setClickedLevel } = clickedLevelSlice.actions;
export default clickedLevelSlice.reducer;
