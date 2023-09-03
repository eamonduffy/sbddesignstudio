import React from "react";
import {
    Container,
    Card,
    CardContent,
    CardMedia,
    Typography,
    Grid,
} from "@mui/material";
import Img1 from "../static/portfolio/1.JPG";
import Img2 from "../static/portfolio/2.JPG";
import Img3 from "../static/portfolio/3.JPG";
import Img4 from "../static/portfolio/4.JPG";
import Img5 from "../static/portfolio/5.JPG";
import Img6 from "../static/portfolio/6.JPG";
import Img7 from "../static/portfolio/7.JPG";
import Img8 from "../static/portfolio/8.JPG";
import Img9 from "../static/portfolio/9.JPG";

const imageCardData = [
    {
        image: Img1,
        subtitle: "Upstate Remodel",
        body: "Poughkeepsie, NY",
    },
    {
        image: Img2,
        subtitle: "Frontside Addition",
        body: "Fairfield, CT",
    },
    {
        image: Img3,
        subtitle: "Pool House Addition",
        body: "Fairfield, CT",
    },
    {
        image: Img4,
        subtitle: "Outdoor Area Expansion",
        body: "East Hampton, NY",
    },
    {
        image: Img5,
        subtitle: "Medical Office Concept",
        body: "Las Vegas, NM",
    },
    {
        image: Img6,
        subtitle: "Modern House Concept",
        body: "Hamptons, NY",
    },
    {
        image: Img7,
        subtitle: "Airport Terminal Rendering",
        body: "Not Applicable",
    },
    {
        image: Img8,
        subtitle: "Garage & Ramp Construction",
        body: "Middletown, CT",
    },
    {
        image: Img9,
        subtitle: "House Construction",
        body: "Fairfield, CT",
    },
];

const Portfolio = () => {
    const customFontStyle = {
        fontFamily: "RobotoSlab",
    };
    return (
        <Container>
            <Grid container spacing={2}>
                {imageCardData.map((card, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card>
                            <CardMedia
                                component="img"
                                alt={`Card ${index + 1}`}
                                height="300"
                                image={card.image}
                            />
                            <CardContent>
                                <Typography
                                    variant="h5"
                                    style={customFontStyle}
                                >
                                    {card.subtitle}
                                </Typography>
                                <Typography
                                    variant="subtitle1"
                                    style={customFontStyle}
                                >
                                    {card.body}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Portfolio;
