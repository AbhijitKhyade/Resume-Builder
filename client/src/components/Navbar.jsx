import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import resume from "../assets/resume.png";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <img src={resume} alt="resume" width={"40px"} height={"40px"} />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, marginLeft: "2px" }}
          >
            RESUME BUILDER
          </Typography>
          <Button color="inherit">Contact Us</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
