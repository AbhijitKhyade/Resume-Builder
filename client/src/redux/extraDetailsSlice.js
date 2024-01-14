// extraDetailsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    skills: [],
    hobbies: [],
    achievements: [],
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
    },
});

export const {
    updateSkills,
    addSkills,
    updateHobbies,
    addHobbies,
    updateAchievements,
    addAchievements,
} = extraDetailsSlice.actions;
export const selectExtraDetails = (state) => state.extraDetails;
export default extraDetailsSlice.reducer;
