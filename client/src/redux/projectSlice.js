// projectSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { title: "", description: "", link: "" }
];

const projectSlice = createSlice({
    name: "project",
    initialState,
    reducers: {
        updateProject: (state, action) => {
            const { index, field, value } = action.payload;
            state[index] = { ...state[index], [field]: value };
        },
        addProject: (state) => {
            state.push({ title: "", description: "", link: "" });
        },
    },
});

export const { updateProject, addProject } = projectSlice.actions;
export const selectProject = (state) => state.project;
export default projectSlice.reducer;
