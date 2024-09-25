import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  telegramId: null,
};

const telegramIdSlice = createSlice({
  name: 'telegram',
  initialState,
  reducers: {
    setTelegramId: (state, action) => {
      state.telegramId = action.payload;
    },
  },
});

export const { setTelegramId } = telegramIdSlice.actions;
export const selectTelegramId = (state) => state.telegram.telegramId;
export default telegramIdSlice.reducer;
