import { configureStore } from '@reduxjs/toolkit';
import profileReducer from './profileSlice';

export const store = configureStore({
    reducer: {
        form: profileReducer,
    }
})
