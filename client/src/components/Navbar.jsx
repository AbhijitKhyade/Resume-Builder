import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
import logo from "../assets/profile.png";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <img src={logo} alt="resume" width={"40px"} height={"40px"} />
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, marginLeft: "2px", fontWeight: "600" }}
          >
           <Link to={'/'} style={{textDecoration:'none' ,color:'#fff'}}> RESUME BUILDER</Link>
          </Typography>
          <Link to={'/resume'} style={{textDecoration:'none' ,color:'#fff'}}>
            <Button color="inherit">Resume</Button>
          </Link>
          <Link to={'/contact-us'} style={{textDecoration:'none' ,color:'#fff'}}>
            <Button color="inherit">Contact Us</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
