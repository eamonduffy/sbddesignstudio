import React from "react";
import { Link, Box } from "@mui/material";
import { AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import Logo from "../static/logo_black.png";

const Footer = () => {
    return (
        <Box
            sx={{
                backgroundColor: "#bdbdbd",
                color: "black",
                // padding: (theme) => theme.spacing(2),
                textAlign: "center",
                // position: "absolute", // Change to "absolute"
                bottom: 0,
                left: 0,
                // width: "100%",
                zIndex: 10,
                p: 2,
            }}
        >
            <div
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    width="100%"
                >
                    <NavLink to="/" className="navbar-logo">
                        <img src={Logo} alt="Logo" height="50" />
                    </NavLink>
                    <div sx={{ m: 1 }}>
                        <Link
                            href="https://www.linkedin.com/in/sbddesignstudio/"
                            target="_blank"
                            rel="noopener noreferrer"
                            color="inherit"
                            underline="none"
                            sx={{
                                verticalAlign: "middle",
                                fontSize: "2rem",
                                transition: "font-size 0.2s ease-in-out", // Add a transition for smooth effect
                                "&:hover": {
                                    color: "#858585", // Increase the font size on hover
                                },
                            }}
                        >
                            <AiFillLinkedin />
                        </Link>
                        <Link
                            href="mailto:sbreitungduffy@aol.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            color="inherit"
                            underline="none"
                            sx={{
                                m: 1,
                                verticalAlign: "middle",
                                fontSize: "2rem",
                                transition: "font-size 0.2s ease-in-out", // Add a transition for smooth effect
                                "&:hover": {
                                    color: "#858585", // Increase the font size on hover
                                },
                            }}
                        >
                            <AiOutlineMail />
                        </Link>
                    </div>
                </Box>
            </div>
        </Box>
    );
};

export default Footer;
