import React from "react";
import { Container, Typography } from "@mui/material";
import ImageCarousel from "../components/ImageCarousel";

import "../App.css";

const Home = () => {
    const customFontStyle = {
        fontFamily: "RobotoSlab",
    };
    return (
        <Container>
            <ImageCarousel />
            <div style={{ textAlign: "center" }}>
                <Typography variant="h4" style={customFontStyle}>
                    Experience client-centered design that harmonizes with the
                    natural surroundings, driven by sustainable passion
                </Typography>
            </div>
        </Container>
    );
};

export default Home;
