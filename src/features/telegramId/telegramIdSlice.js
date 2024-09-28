import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  telegramId: JSON.parse(localStorage.getItem('telegramId')) || '',
};

const telegramIdSlice = createSlice({
  name: 'telegram',
  initialState,
  reducers: {
    setTelegramId: (state, action) => {
      state.telegramId = action.payload;
      localStorage.setItem('telegramId', JSON.stringify(state.telegramId));
    },
  },
});

export const { setTelegramId } = telegramIdSlice.actions;
export const selectTelegramId = (state) => state.telegram.telegramId;
export default telegramIdSlice.reducer;
