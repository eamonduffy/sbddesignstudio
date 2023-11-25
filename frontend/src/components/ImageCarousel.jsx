import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImageCarousel.css";

import img1 from "../static/portfolio/1.JPG";
import img2 from "../static/portfolio/2.JPG";
import img3 from "../static/portfolio/3.JPG";
import img4 from "../static/portfolio/4.JPG";
import img10 from "../static/portfolio/10.jpg";
import img11 from "../static/portfolio/11.jpg";


const ImageCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const containerStyles = {
        overflow: "hidden",
        height: "55vh", // Set the container height to 50% of the viewport height
    };

    const imageStyles = {
        width: "100%",
        height: "100%", // Set the image height to 100% of its container
        objectFit: "cover", // Ensure the image covers the entire container
    };

    return (
        <div style={containerStyles}>
            <Slider {...settings} className="">
                <div>
                    <img src={img1} alt="1" style={imageStyles} />
                </div>
                <div>
                    <img src={img4} alt="4" style={imageStyles} />
                </div>
                <div>
                    <img src={img2} alt="2" style={imageStyles} />
                </div>
                <div>
                    <img src={img3} alt="3" style={imageStyles} />
                </div>
                <div>
                    <img src={img10} alt="3"  style={imageStyles}/>
                </div>
                <div>
                    <img src={img11} alt="3" style={imageStyles} />
                </div>
            </Slider>
        </div>
    );
};

export default ImageCarousel;
