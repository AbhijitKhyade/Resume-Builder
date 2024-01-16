import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { saveAs } from "file-saver";
import html2pdf from "html2pdf.js";
import "./resumeStyle.css";

const Resume = () => {
  const profile = useSelector((state) => state.profileDetails);
  console.log(profile);
  const education = useSelector((state) => state.educationDetails);
  const projects = useSelector((state) => state.projectDetails);
  const experience = useSelector((state) => state.experienceDetails);
  const extraDetails = useSelector((state) => state.extraDetails);

  const handleDownload = () => {
    try {
      const resumeContainer =
        document.getElementsByClassName("resume-container")[0];

      if (resumeContainer) {
        // Use html2pdf to generate the PDF
        html2pdf(resumeContainer, {
          margin: 10,
          filename: "resume.pdf",
          image: { type: "jpeg", quality: 0.98 },
          html2canvas: { scale: 3 },
          jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
        }).then((pdf) => {
          // Save the PDF using FileSaver.js
          saveAs(pdf, "resume.pdf");
        });
      }
    } catch (error) {
      console.error("Error downloading resume:", error);
    }
  };

  const customStyle = {
    width: "715px",
    height: "auto",
    padding: "40px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#ffffff",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          margin: "2vw",
        }}
      >
        <Paper
          className="resume-container"
          elevation={2}
          // sx={{ margin: "8px", height: "auto", width: "65%" }}
          style={customStyle}
        >
          <Box className="resume-card">
            {/* Heading */}
            <Grid className="heading">
              <h1>{profile.firstName} {profile.lastName}</h1>
            </Grid>
            <div className="resume-container">
              {/* Left section */}
              <div className="left-section">
                {/* User Info */}
                <div className="info-list">
                  <div className="info-list-item">
                    <div className="icon">
                      <span>
                        <i className="fa-solid fa-phone" />
                      </span>
                    </div>
                    <div className="content">
                      <p>{profile.mobile}</p>
                    </div>
                  </div>
                  <div className="info-list-item">
                    <div className="icon">
                      <span>
                        <i className="fa-solid fa-envelope" />
                      </span>
                    </div>
                    <div className="content">
                      <p>{profile.email}</p>
                    </div>
                  </div>
                  <div className="info-list-item">
                    <div className="icon" style={{ fontSize: 18 }}>
                      <span>
                        <i className="fa-brands fa-linkedin" />
                      </span>
                    </div>
                    <div className="content">
                      <p>{profile.linkedIn}</p>
                    </div>
                  </div>
                  <div className="info-list-item">
                    <div className="icon" style={{ fontSize: 18 }}>
                      <span>
                        <i className="fa-solid fa-location-dot" />
                      </span>
                    </div>
                    <div className="content">
                      <p>{profile.address}</p>
                    </div>
                  </div>
                </div>

                {/* Education */}
                <div className="section-title">Education</div>
                {/* Repeat this block for each education level */}
                <ul className="info-list">
                  <li className="info-list-item">
                    <h4>{education.college}</h4>
                  </li>
                  <li className="info-list-item">
                    <p>{education.year}</p>
                  </li>
                  <li className="info-list-item">
                    <p>{education.branch}</p>
                  </li>
                  <li className="info-list-item">
                    <span><p>{education.startYear}-{education.endYear}</p>| <p>{education.city}</p></span>
                  </li>
                  <li className="info-list-item">
                    <p>CGPA: {education.grades}</p>
                  </li>
                </ul>

                {/* Extra Details */}
                <div className="section-title">Skills</div>
                <ul className="info-list">
                  <li className="info-list-item">Skill 1</li>
                  <li className="info-list-item">Skill 2</li>
                  {/* Add more skills */}
                </ul>
                <div className="section-title">Hobbies/Interests</div>
                <ul className="info-list">
                  <li className="info-list-item">Hobby 1</li>
                  <li className="info-list-item">Hobby 2</li>
                  {/* Add more hobbies */}
                </ul>
                <div className="section-title">Extracurricular Activities</div>
                <ul className="info-list">
                  <li className="info-list-item">Activity 1</li>
                  <li className="info-list-item">Activity 2</li>
                  {/* Add more activities */}
                </ul>
              </div>
              {/* Right section */}
              <div className="right-section">
                <div className="section-title">About Me</div>
                <p>
                  {"{"}About Me Description{"}"}
                </p>
                <div className="section-title">Experience</div>
                <ul className="info-list">
                  <li className="info-list-item">Experience 1</li>
                  <li className="info-list-item">Experience 2</li>
                  {/* Add more experiences */}
                </ul>
                <div className="section-title">Projects</div>
                <ul className="info-list">
                  <li className="info-list-item">Project 1</li>
                  <li className="info-list-item">Project 2</li>
                  {/* Add more projects */}
                </ul>
                <div className="section-title">Achievements</div>
                <ul className="info-list">
                  <li className="info-list-item">Achievement 1</li>
                  <li className="info-list-item">Achievement 2</li>
                  {/* Add more achievements */}
                </ul>
              </div>
            </div>
          </Box>
        </Paper>

        <Button variant="contained" sx={{margin:'20px'}} onClick={handleDownload}>
          Download
        </Button>
      </Box>
    </>
  );
};

export default Resume;
