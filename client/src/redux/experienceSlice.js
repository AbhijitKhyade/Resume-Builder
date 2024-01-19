import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { institute: "", desc: "" }
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
            state.push({ institute: "", desc: "" });
        },
    },
});

export const { updateExperience, addExperience } = experienceSlice.actions;
export const selectProject = (state) => state.experience;
export default experienceSlice.reducer;
