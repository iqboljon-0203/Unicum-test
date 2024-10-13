// features/formSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk - bu axios orqali ma'lumot yuborish funksiyasi
export const submitForm = createAsyncThunk('form/submitForm', async (formData, { rejectWithValue }) => {
  try {
    const response = await axios.post('https://unicum.usat.uz/api/v1/users/survey/create/', formData);
    if (response.status === 200) {
        // Telegram WebApp ni yopish
        
        if (window.Telegram && window.Telegram.WebApp) {
          window.Telegram.WebApp.close();          
        }
      }
    return response.data; // Backenddan qaytgan javob
  } catch (error) {
    return rejectWithValue(error.response.data); // Xato bo'lsa xato ma'lumotni qaytarish
  }
});

const formSlice = createSlice({
  name: 'form',
  initialState: {
    data: null,
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(submitForm.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(submitForm.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(submitForm.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default formSlice.reducer;
