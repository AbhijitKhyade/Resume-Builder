import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { institute: "", position: "", duration: "", desc: "" }
];

const experienceSlice = createSlice({
    name: "experience",
    initialState,
    reducers: {
        updateExperience: (state, action) => {
            const { index, field, value } = action.payload;
            state[index] = { ...state[index], [field]: value };
        },
        addExperience: (state) => {
            state.push({ institute: "", position: "", duration: "", desc: "" });
        },
    },
});

export const { updateExperience, addExperience } = experienceSlice.actions;
export const selectProject = (state) => state.experience;
export default experienceSlice.reducer;
