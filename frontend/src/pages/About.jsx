import React from "react";
import { Container, Typography, Grid } from "@mui/material";
import Profile2 from "../static/profile2.JPG";
import Syracuse from "../static/syracuse.JPG";

import "../App.css";

const About = () => {
    const customFontStyle = {
        fontFamily: "RobotoSlab",
    };

    return (
        <Container>
            <Grid container spacing={3} sx={{ mt: 2 }}>
                <Grid item xs={12} md={6}>
                    <div style={{ textAlign: "center" }}>
                        <Typography variant="h4" style={customFontStyle}>
                            Stefanie Breitung Duffy
                        </Typography>
                    </div>
                    <Typography
                        variant="subtitle1"
                        style={customFontStyle}
                        sx={{ mt: 3 }}
                    >
                        A dedicated professional in the field of architecture
                        and design, with a strong focus on serving the needs of
                        the everyday person. Her portfolio encompasses a wide
                        spectrum of projects, ranging from small-scale endeavors
                        to large-scale developments, all driven by a commitment
                        to inclusivity and accessibility. Stefanie's approach to
                        her work is holistic, as she takes pride in overseeing
                        projects from inception to completion, ensuring that
                        every detail aligns with her client's vision. <br />
                        <br />
                        What sets her apart is her unwavering dedication to
                        environmental sustainability, with a keen eye for
                        integrating the surrounding environment seamlessly into
                        her designs. Stefanie's work is a testament to her
                        passion for creating spaces that not only meet the
                        practical needs of her clients but also enrich the
                        communities they serve.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img
                        src={Profile2}
                        alt="profile2"
                        style={{ width: "100%" }}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: 2 }}>
                <Grid item xs={12} md={6}>
                    <img
                        src={Syracuse}
                        alt="Syracuse"
                        style={{ width: "100%" }}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <div style={{ textAlign: "center" }}>
                        <Typography variant="h4" style={customFontStyle}>
                            Experience
                        </Typography>
                    </div>
                    <Typography
                        variant="subtitle1"
                        style={customFontStyle}
                        sx={{ mt: 3 }}
                    >
                        With over 30 years of experience in the industry,
                        Stefanie Breitung Duffy holds a Master's of Architecture
                        from Syracuse University School of Architecture and a
                        major contractor license. Her extensive career spans
                        various architectural projects, including new
                        constructions, additions, and remodels. She excels in
                        creating innovative designs for urban landscapes,
                        seamlessly integrating additions with existing
                        structures, and revitalizing spaces through
                        transformative remodels.
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: 2 }}></Grid>
        </Container>
    );
};

export default About;
