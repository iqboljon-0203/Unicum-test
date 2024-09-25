import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// POST so'rovi uchun thunk yaratish
export const postTestSessionData = createAsyncThunk(
    'testSession/postData',
    async (testSessionData, { rejectWithValue }) => {
        try {
            const response = await axios.post(
                'https://unicum.usat.uz/api/v1/tests/completed/',
                testSessionData
            );
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

const testSessionSlice = createSlice({
    name: 'testSession',
    initialState: {
        testSessionId: 1,
        userResponses: [],
        isLoading: false,
        error: null,
        postSuccess: false,
    },
    reducers: {
        // User javoblarini qo'shish
        addUserResponse: (state, action) => {
            state.userResponses.push(action.payload);
        },
        addTestSessionId: (state, action) => {
            state.testSessionId = action.payload;
        },
    },
    extraReducers: (builder) => {
        // POST so'rovlar uchun statuslarni ko'rib chiqish
        builder
            .addCase(postTestSessionData.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(postTestSessionData.fulfilled, (state) => {
                state.isLoading = false;
                state.postSuccess = true;
            })
            .addCase(postTestSessionData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

// Reducer'larni eksport qilish
export const { addUserResponse, addTestSessionId } = testSessionSlice.actions;

export default testSessionSlice.reducer;