import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Paper,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Profile from "../components/Profile";
import Education from "./../components/Education";
import Projects from "../components/Projects";
import Experience from "./../components/Experience";
import ExtraDetails from "../components/ExtraDetails";
import axios from "axios";
import { useSelector } from "react-redux";

const Home = () => {
  const [activeComponent, setActiveComponent] = useState("profile");
  const [downloadDialogOpen, setDownloadDialogOpen] = useState(false);
  const [resumeData, setResumeData] = useState(null);

  const profile = useSelector((state) => state.form);

  // useEffect(() => {
  //   console.log("ProfileData:", profile);
  // }, [profile]);
  //handling next
  const handleNext = () => {
    if (activeComponent === "profile") {
      setActiveComponent("educationalDetails");
    } else if (activeComponent === "educationalDetails") {
      setActiveComponent("projectsDetails");
    } else if (activeComponent === "projectsDetails") {
      setActiveComponent("experienceDetails");
    } else if (activeComponent === "experienceDetails") {
      setActiveComponent("extraDetails");
    }
  };

  //handling back
  const handleBack = () => {
    if (activeComponent === "educationalDetails") {
      setActiveComponent("profile");
    } else if (activeComponent === "projectsDetails") {
      setActiveComponent("educationalDetails");
    } else if (activeComponent === "experienceDetails") {
      setActiveComponent("projectsDetails");
    } else if (activeComponent === "extraDetails") {
      setActiveComponent("experienceDetails");
    }
  };

  const customStyle = {
    margin: "10px",
    height: "auto",
    width: "80%",
    padding: "20px",
    backgroundColor: "#fff",
  };
  const containerStyle = {
    marginTop: "30",
    display: "flex",
    justifyContent: "center",
  };

  const getPageNumber = () => {
    switch (activeComponent) {
      case "profile":
        return 1;
      case "educationalDetails":
        return 2;
      case "projectsDetails":
        return 3;
      case "experienceDetails":
        return 4;
      case "extraDetails":
        return 5;
      default:
        return 1;
    }
  };

  const handleDownloadDialogOpen = () => {
    setDownloadDialogOpen(true);
  };

  const handleDownloadDialogClose = () => {
    setDownloadDialogOpen(false);
  };

  const handleGenerateResume = async () => {
    try {
      const response = await axios.post("/api/generateResume", {
        profile,
        // education:
        // projects:
        // experience:
        // extraDetails:
      });

      // Save the generated resume data
      setResumeData(response.data);

      // Open the download dialog
      handleDownloadDialogOpen();
    } catch (error) {
      console.error("Error generating resume:", error);
    }
  };

  return (
    <Box style={containerStyle}>
      <Paper elevation={3} style={customStyle}>
        {/* Render the appropriate step component based on the active step */}
        {activeComponent === "profile" && <Profile onNext={handleNext} />}
        {activeComponent === "educationalDetails" && (
          <Education onBack={handleBack} onNext={handleNext} />
        )}
        {activeComponent === "projectsDetails" && (
          <Projects onBack={handleBack} onNext={handleNext} />
        )}
        {activeComponent === "experienceDetails" && (
          <Experience onBack={handleBack} onNext={handleNext} />
        )}
        {activeComponent === "extraDetails" && (
          <ExtraDetails onBack={handleBack} />
        )}

        <div style={{ textAlign: "center", marginTop: 16, marginRight: 10 }}>
          {activeComponent !== "profile" && (
            <Button
              variant="contained"
              onClick={handleBack}
              sx={{ marginRight: "5px" }}
            >
              Back
            </Button>
          )}
          {activeComponent !== "extraDetails" && (
            <Button variant="contained" onClick={handleNext}>
              Next
            </Button>
          )}

          <div style={{ textAlign: "center", marginTop: 16 }}>
            {activeComponent === "extraDetails" && (
              <>
                <Button variant="contained" onClick={handleGenerateResume}>
                  Download
                </Button>
                <Dialog
                  open={downloadDialogOpen}
                  onClose={handleDownloadDialogClose}
                >
                  <DialogTitle>Download Confirmation</DialogTitle>
                  <DialogContent>
                    <Typography>
                      Are you sure you want to download your Resume?
                    </Typography>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleDownloadDialogClose} color="primary">
                      Cancel
                    </Button>
                    <Button
                      onClick={handleDownloadDialogClose}
                      color="primary"
                      autoFocus
                    >
                      OK
                    </Button>
                  </DialogActions>
                </Dialog>
              </>
            )}
          </div>
          <div style={{ marginTop: "10px" }}>
            <p sx={{ fontWeight: "300px" }}>Page {getPageNumber()}</p>
          </div>
        </div>
      </Paper>
    </Box>
  );
};

export default Home;
