import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { selectTelegramId } from '../telegramId/telegramIdSlice';
// API dan postlarni olish uchun createAsyncThunk yaratamiz
export const fetchLevels = createAsyncThunk(
  'levels/fetchLevels',
  async (_,{getState}) => {
    const state = getState();
    const telegramId = selectTelegramId(state);
    
    const response = await axios.get(`https://unicum.usat.uz/api/v1/users/levels/bot-user/?telegramId=${telegramId}`);
    return response.data;
  }
);

const levelsSlice = createSlice({
    name: 'levels',
    initialState: {
        levels: JSON.parse(localStorage.getItem('levels')) || [],
        status: 'idle', // idle, loading, succeeded, failed
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchLevels.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchLevels.fulfilled, (state, action) => {
                state.status = 'succeeded';
                // Postlarni saqlash
                state.levels = action.payload;
                localStorage.setItem('levels', JSON.stringify(state.levels)); // LocalStorage ga saqlash
            })
            .addCase(fetchLevels.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default levelsSlice.reducer;
