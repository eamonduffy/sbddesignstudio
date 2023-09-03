import React from "react";
import { NavLink } from "react-router-dom";
import { AppBar, Toolbar, Button, Box } from "@mui/material";
import Logo from "../static/logo_black.png";
import "./Navbar.css";

const Navbar = () => {
    return (
        <AppBar
            position="static"
            className="navbar"
            sx={{
                backgroundColor: "white",
                color: "black",
                boxShadow: "none",
            }}
        >
            <Toolbar>
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    width="100%"
                >
                    <NavLink to="/" className="navbar-logo">
                        <img src={Logo} alt="Logo" height="100" />
                    </NavLink>
                    <div className="navbar-links">
                        <Button component={NavLink} to="/about" color="inherit">
                            About
                        </Button>
                        <Button
                            component={NavLink}
                            to="/portfolio"
                            color="inherit"
                        >
                            Portfolio
                        </Button>
                        <Button
                            component={NavLink}
                            to="/contact"
                            color="inherit"
                        >
                            Contact
                        </Button>
                    </div>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
