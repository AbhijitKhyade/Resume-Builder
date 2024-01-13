import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import InterestsIcon from '@mui/icons-material/Interests';

const ExtraDetails = () => {
  const [skills, setSkills] = useState([""]);
  const [achievements, setAchievements] = useState([""]);
  const [hobbies, setHobbies] = useState([""]);

  const handleAddSkill = () => {
    setSkills([...skills, ""]);
  };

  const handleAddAchievement = () => {
    setAchievements([...achievements, ""]);
  };

  const handleAddHobby = () => {
    setHobbies([...hobbies, ""]);
  };

  const handleInputChange = (index, type, value) => {
    // Copy the current array
    const newArray = [...type];
    // Update the value at the specified index
    newArray[index] = value;
    // Update the state with the new array
    if (type === skills) {
      setSkills(newArray);
    } else if (type === achievements) {
      setAchievements(newArray);
    } else if (type === hobbies) {
      setHobbies(newArray);
    }
  };

  const containerStyle = {
    marginTop: "30",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  };

  return (
    <div style={containerStyle}>
      <Card>
        <CardHeader
          title={
            <Typography variant="h5" align="center" fontWeight="bold">
              Extra Details
            </Typography>
          }
        />
      </Card>
      <CardContent>
        {/* Skills */}
        <div>
          <Typography variant="h5" sx={{ marginTop: "8px" }}>
            Skills
          </Typography>
          <Grid container spacing={2} alignItems="center" lg={12}>
            {skills.map((skill, index) => (
              <Grid item md={4} sm={6} xs={12} key={index}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  type="text"
                  name={`skill${index + 1}`}
                  label={`Skill ${index + 1}`}
                  style={{ width: "100%" }}
                  value={skill}
                  onChange={(e) => handleInputChange(index, skills, e.target.value)}
                />
              </Grid>
            ))}
          </Grid>
          <Button variant="contained" color="primary" sx={{marginTop:'8px'}} onClick={handleAddSkill}>
            Add Skill
          </Button>
        </div>

        {/* Achievements */}
        <div>
          <Typography variant="h5" sx={{ marginTop: "8px" }}>
            Achievements
          </Typography>
          <Grid container spacing={2} alignItems="center" lg={12}>
            {achievements.map((achievement, index) => (
              <Grid item md={4} sm={6} xs={12} key={index}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  type="text"
                  name={`achievement${index + 1}`}
                  label={`Achievement ${index + 1}`}
                  style={{ width: "100%" }}
                  value={achievement}
                  onChange={(e) => handleInputChange(index, achievements, e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton>
                          <EmojiEventsIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            ))}
          </Grid>
          <Button
            variant="contained"
            color="primary"
            sx={{marginTop:'8px'}}
            onClick={handleAddAchievement}
          >
            Add Achievement
          </Button>
        </div>

        {/* Hobbies/Interests */}
        <div>
          <Typography variant="h5" sx={{ marginTop: "8px" }}>
            Hobbies/Interests
          </Typography>
          <Grid container spacing={2} alignItems="center" lg={12}>
            {hobbies.map((hobby, index) => (
              <Grid item md={4} sm={6} xs={12} key={index}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  type="text"
                  name={`hobby${index + 1}`}
                  label={`Hobby ${index + 1}`}
                  style={{ width: "100%" }}
                  value={hobby}
                  onChange={(e) => handleInputChange(index, hobbies, e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton>
                          <InterestsIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            ))}
          </Grid>
          <Button variant="contained" color="primary" sx={{marginTop:'8px'}} onClick={handleAddHobby}>
            Add Hobby
          </Button>
        </div>
      </CardContent>
    </div>
  );
};

export default ExtraDetails;
