import { Box, Button, Grid, Link, Paper, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { saveAs } from "file-saver";
import html2pdf from "html2pdf.js";
import "./resumeStyle.css";
import github from "../assets/github.png";
import leetcode from "../assets/leetcode.png";
import codechef from "../assets/codechef.png";
import codeforces from "../assets/codeforces.png";
import DownloadIcon from "@mui/icons-material/Download";

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
    padding: "30px",
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
        <Paper className="resume-container" elevation={2} style={customStyle}>
          <Box>
            {/* Heading */}
            <div className="title-container">
              <h1 className="heading">
                {profile.firstName} {profile.lastName}
              </h1>
            </div>
            <div className="resume-content">
              {/* Left section */}
              <div className="left-section">
                {/* User Info */}
                <div className="user-info">
                  <div className="user-info-item">
                    <div className="icon">
                      <span>
                        <i className="fa-solid fa-phone" />
                      </span>
                    </div>
                    <div className="content">
                      <p>{profile.mobile}</p>
                    </div>
                  </div>
                  <div className="user-info-item">
                    <div className="icon">
                      <span>
                        <i className="fa-solid fa-envelope" />
                      </span>
                    </div>
                    <div className="content">
                      <p>{profile.email}</p>
                    </div>
                  </div>
                  <div className="user-info-item">
                    <div className="icon" style={{ fontSize: 18 }}>
                      <span>
                        <i className="fa-brands fa-linkedin" />
                      </span>
                    </div>
                    <div className="content">
                      <p>{profile.linkedIn}</p>
                    </div>
                  </div>
                  <div className="user-info-item">
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
                <div className="education-info">
                  <div className="heading">Education</div>
                  {/* Part 1 */}
                  <div className="info">
                    <div className="college">
                      Pune Institute of Computer Technology
                    </div>
                    <div className="clg-details">
                      <p>T.E. IT Engineering</p>
                      <p>
                        <span>2021-2025 | Pune</span>
                      </p>
                      <p>SGPA: 9.71</p>
                    </div>
                  </div>
                  {/* Part 2 */}
                  <div className="info">
                    <div className="higher-clg">Sangameshwar College</div>
                    <div className="clg-details">
                      <p>
                        <span>2019-2021 | Solapur</span>
                      </p>
                      <p>Class XII Percentage: 96.16%</p>
                    </div>
                  </div>
                  {/* Part 3 */}
                  <div className="info">
                    <div className="school">Mahatma Phule Vidyalaya School</div>
                    <div className="school-details">
                      <p>
                        <span>2018-2019 | South Solapur, Mandrup</span>
                      </p>
                      <p>Class X Percentage: 96.00%</p>
                    </div>
                  </div>
                </div>

                {/* Skills */}
                <div className="skills">
                  <div className="heading">Skills</div>
                  <div className="skillSets">
                    <li>&#11049; REACT</li>
                    <li>&#11049; NODEJS</li>
                  </div>
                  <div className="div skillSets">
                    <li>&#11049; REACT</li>
                    <li>&#11049; NODEJS</li>
                  </div>
                  <div className="div skillSets">
                    <li>&#11049; REACT</li>
                    <li>&#11049; NODEJS</li>
                  </div>
                  <div className="div skillSets">
                    <li>&#11049; REACT</li>
                    <li>&#11049; NODEJS</li>
                  </div>
                </div>

                {/* Hobbies */}
                <div className="hobbies">
                  <div className="heading">Hobbies</div>
                  <div className="hobby-list">
                    <li>&#11049; Playing Cricket</li>
                    <li>&#11049; Playing Piano</li>
                  </div>
                </div>

                {/* Links */}
                <div className="links">
                  <div className="heading">Links</div>
                  <div className="linkSets">
                    <div className="link-item">
                      <img src={github} alt="github" />{" "}
                      <Link className="link">www.github.com</Link>
                    </div>
                    <div className="link-item">
                      <img src={leetcode} alt="github" />{" "}
                      <Link className="link">www.leetcode.com</Link>
                    </div>
                    <div className="link-item">
                      <img src={codechef} alt="github" />{" "}
                      <Link className="link">www.codechef.com</Link>
                    </div>
                    <div className="link-item">
                      <img src={codeforces} alt="github" />{" "}
                      <Link className="link">www.codeforces.com</Link>
                    </div>
                  </div>
                </div>

                {/* Extra Curricular */}
                <div className="extra-curricular">
                  <div className="heading">Extra Curricular</div>
                  <div className="extra-list">
                    <li>&#11049; Member of PCSB club</li>
                    <li>&#11049; Volunteer in NSS club</li>
                  </div>
                </div>
              </div>

              {/* Right section */}
              <div className="right-section">
                {/* About me */}
                <div className="about-me">
                  <div className="heading">About Me</div>
                  <p className="content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellat qui harum debitis ea iste dignissimos iusto dolor
                    ipsa temporibus. Sint sit placeat alias, vero veri excepturi
                    repudiandae error esse neque. ipsa temporibus. Sint sit
                    placeat alias.
                  </p>
                </div>

                {/* Experience */}
                <div className="experience">
                  <div className="heading">Experience</div>
                  <div className="expr-list">
                    <div className="lists">
                      <div className="name">1.StartUp Company</div>
                      <p className="content">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sunt aperiam eaque saepe eveniet minima sint.
                      </p>
                    </div>
                    <div className="lists">
                      <div className="name">2.StartUp Company</div>
                      <p className="content">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sunt aperiam eaque saepe eveniet minima sint.
                      </p>
                    </div>
                    <div className="lists">
                      <div className="name">3.StartUp Company</div>
                      <p className="content">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sunt aperiam eaque saepe eveniet minima sint.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Projects */}
                <div className="projects">
                  <div className="heading">Projects</div>
                  <div className="pro-list">
                    <div className="lists">
                      <div className="name">1.Ecommerce</div>
                      <p className="content">
                        Lorem ipsum dolor sit amet consectetur dipisicing elit.
                        Sunt aperiam eaque saepe eveniet minima sint.adipisicing
                        elit. Lorem ipsum dolor sit amet consectetur.adipisicing
                        elit. Sunt aperiam eaque saepe eveniet minima sint.
                      </p>
                    </div>
                    <div className="lists">
                      <div className="name">2.Stack Overflow</div>
                      <p className="content">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sunt aperiam eaque saepe eveniet minima sint.
                      </p>
                    </div>
                    <div className="lists">
                      <div className="name">3.Resume Builder</div>
                      <p className="content">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sunt aperiam eaque saepe eveniet minima sint.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Achievements */}
                <div className="achievements">
                  <div className="heading">Achievements</div>
                  <div className="list">
                    <li>
                      &#11049; Lorem ipsum dolor sit, amet consectetur
                      adipisicing elit. Maiores, repudiandae.
                    </li>
                    <li>
                      &#11049; Lorem ipsum dolor sit, amet consectetur
                      adipisicing elit. Laborum, cupiditate?
                    </li>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Paper>

        <Button
          variant="contained"
          sx={{ margin: "20px" }}
          onClick={handleDownload}
          endIcon={<DownloadIcon />}
        >
          Download
        </Button>
      </Box>
    </>
  );
};

export default Resume;
