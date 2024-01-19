// extraDetailsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    skills: [],
    hobbies: [],
    achievements: [],
    extraCoCurricular: [],
};

const extraDetailsSlice = createSlice({
    name: "extraDetails",
    initialState,
    reducers: {
        updateSkills: (state, action) => {
            const { index, value } = action.payload;
            state.skills[index] = value;
        },
        addSkills: (state) => {
            state.skills.push("");
        },
        updateHobbies: (state, action) => {
            const { index, value } = action.payload;
            state.hobbies[index] = value;
        },
        addHobbies: (state) => {
            state.hobbies.push("");
        },
        updateAchievements: (state, action) => {
            const { index, value } = action.payload;
            state.achievements[index] = value;
        },
        addAchievements: (state) => {
            state.achievements.push("");
        },
        updateExtraCoCurricular: (state, action) => {
            const { index, value } = action.payload;
            state.extraCoCurricular[index] = value;
        },
        addExtraCoCurricular: (state) => {
            state.extraCoCurricular.push("");
        },
    },
});

export const {
    updateSkills,
    addSkills,
    updateHobbies,
    addHobbies,
    updateAchievements,
    addAchievements,
    updateExtraCoCurricular,
    addExtraCoCurricular
} = extraDetailsSlice.actions;
export const selectExtraDetails = (state) => state.extraDetails;
export default extraDetailsSlice.reducer;
