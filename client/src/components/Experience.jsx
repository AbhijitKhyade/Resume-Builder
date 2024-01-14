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
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import TimelapseIcon from "@mui/icons-material/Timelapse";
import DescriptionIcon from "@mui/icons-material/Description";
import WorkIcon from "@mui/icons-material/Work";
import { useDispatch, useSelector } from "react-redux";
import { addExperience, updateExperience } from "../redux/experienceSlice";

const Experience = () => {
  const dispatch = useDispatch();
  const experiences = useSelector((state) => state.experienceDetails);

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    dispatch(updateExperience({ index, field: name, value }));
  };

  const handleAddExperience = () => {
    dispatch(addExperience());
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
              Experience Details
            </Typography>
          }
        />
      </Card>
      <CardContent>
        {experiences.map((experience, index) => (
          <div key={index}>
            <Typography variant="h5" sx={{ marginTop: "8px" }}>
              Experience {index + 1}
            </Typography>
            <Grid container spacing={1} alignItems="center" lg={12}>
              <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  type="text"
                  name="institute"
                  label="Institute/Organisation"
                  style={{ width: "100%" }}
                  value={experience.institute}
                  onChange={(event) => handleInputChange(index, event)}
                  required
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton>
                          <CorporateFareIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  type="text"
                  name="position"
                  label="Position"
                  style={{ width: "100%" }}
                  value={experience.position}
                  onChange={(event) => handleInputChange(index, event)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton>
                          <WorkIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  type="text"
                  name="duration"
                  label="Duration"
                  style={{ width: "100%" }}
                  value={experience.duration}
                  onChange={(event) => handleInputChange(index, event)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton>
                          <TimelapseIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
            <Grid container spacing={1} alignItems="center" lg={12}>
              <Grid item md={12} sm={12} xs={12} lg={12}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  type="text"
                  name="desc"
                  label="Description"
                  style={{ width: "100%" }}
                  value={experience.desc}
                  onChange={(event) => handleInputChange(index, event)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton>
                          <DescriptionIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
          </div>
        ))}
        <Button
          variant="contained"
          color="primary"
          sx={{ marginTop: "8px" }}
          onClick={handleAddExperience}
        >
          Add Experience
        </Button>
      </CardContent>
    </div>
  );
};

export default Experience;
