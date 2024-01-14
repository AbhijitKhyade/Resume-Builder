import { configureStore } from '@reduxjs/toolkit';
import profileReducer from './profileSlice';
import educationReducer from './educationSlice';
import projectReducer from './projectSlice';
import experienceReducer from './experienceSlice';
import extraDetailsReducer from './extraDetailsSlice';

export const store = configureStore({
    reducer: {
        profileDetails: profileReducer,
        educationDetails: educationReducer,
        projectDetails: projectReducer,
        experienceDetails: experienceReducer,
        extraDetails: extraDetailsReducer,
    }
})
