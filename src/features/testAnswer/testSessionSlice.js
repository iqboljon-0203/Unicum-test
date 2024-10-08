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
        data: JSON.parse(localStorage.getItem('answerData'))||null,
        testSessionId: null,
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
        clearTestSession: (state) => {
            state.data = null;
            state.userResponses = [];
            state.testSessionId = null;
            state.isLoading = false;
            state.error = null;
            state.postSuccess = false;
        },
    },
    extraReducers: (builder) => {
        // POST so'rovlar uchun statuslarni ko'rib chiqish
        builder
            .addCase(postTestSessionData.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(postTestSessionData.fulfilled, (state,action) => {
                state.isLoading = false;
                state.data = action.payload;
                state.postSuccess = true;
                localStorage.setItem('answerData', JSON.stringify(state.data));
            })
            .addCase(postTestSessionData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

// Reducer'larni eksport qilish
export const { addUserResponse, addTestSessionId,clearTestSession } = testSessionSlice.actions;

export default testSessionSlice.reducer;
