// redux/getDataSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// 1. createAsyncThunk yordamida get so'rovini aniqlaymiz
export const fetchQuestionAnswers = createAsyncThunk(
  'data/fetchData',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('https://unicum.usat.uz/api/v1/stats/survey-all/'); // URL ni o'zingizning API ga moslang
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// 2. Slice yaratamiz
const dataSlice = createSlice({
  name: 'data',
  initialState: {
    answers: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestionAnswers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchQuestionAnswers.fulfilled, (state, action) => {
        state.loading = false;
        state.answers = action.payload;
      })
      .addCase(fetchQuestionAnswers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default dataSlice.reducer;
