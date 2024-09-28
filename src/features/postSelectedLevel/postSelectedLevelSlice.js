import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// POST so'rovini yuboradigan createAsyncThunk
export const postSelectedLevel = createAsyncThunk(
    'level/postSelectedLevel',
    async ({ telegramId, level }, { rejectWithValue }) => {
        try {
            const response = await axios.post(
                'https://unicum.usat.uz/api/v1/tests/start/',
                {
                    telegramId,
                    level,
                }
            );
            return response.data; // Serverdan qaytgan ma'lumot
        } catch (error) {
            return rejectWithValue(error.response.data); // Xatolik yuz bersa
        }
    }
);

const postSelectedLevelSlice = createSlice({
    name: 'selectedLevel',
    initialState: {
        data: JSON.parse(localStorage.getItem('selectedData')), // Serverdan kelgan data
        loading: false, // Yuklanish holati
        error: null, // Xatolik
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(postSelectedLevel.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(postSelectedLevel.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                localStorage.setItem('selectedData', JSON.stringify(state.data)); // LocalStorage ga saqlash

            })
            .addCase(postSelectedLevel.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default postSelectedLevelSlice.reducer;
