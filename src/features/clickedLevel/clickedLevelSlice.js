import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    clickedLevel: JSON.parse(localStorage.getItem('clickedLevel')) || "",
};

const clickedLevelSlice = createSlice({
    name: 'clickedLevel',
    initialState,
    reducers: {
        setClickedLevel: (state, action) => {
            state.clickedLevel = action.payload; // payload orqali yuborilgan stringni saqlash
            localStorage.setItem('clickedLevel', JSON.stringify(state.clickedLevel)); // LocalStorage ga saqlash
        },
    },
});

// Reducerni export qilish
export const { setClickedLevel } = clickedLevelSlice.actions;
export default clickedLevelSlice.reducer;
