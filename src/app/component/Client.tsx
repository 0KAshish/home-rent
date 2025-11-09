"use client";
import { Typography } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";
import ImageElements from "./ImageElements";
import { clientData } from "../utils/ClientData";

const ProductData = clientData.map((item, index:number) => (
  <ImageElements
    key={index}
    src={item.src}
    alt={item.alt}
    name={item.name}
    rating={item.rating}
    description={item.description}
  />
));

function Client() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint:  
      { max: 4000, min: 1264 },
      items: 3,
    },
    desktop: {
      breakpoint:
      { max: 1664, min: 800 },
      items: 3,
    },
    tablet: {
      breakpoint:
      { max: 800, min: 464 },
      items: 2,
    },
    mobile: {  
      breakpoint:
      { max: 464, min: 0 },
      items: 1,
    },
  };
  // const arrowStyle = {
  //   background: "transparent",
  //   border: 0,
  //   color: "#fff",
  //   fontSize: "80px"
  // };
  // const CustomRight = ({ onClick }:any) => (
  //   <Button className="arrow right" onClick={onClick} sx={arrowStyle}>
  //     <ArrowCircleLeftOutlinedIcon style={{ fontSize: "50px", backgroundColor:"red" }} />
  //   </Button>
  // );
  // const CustomLeft = ({ onClick }:any) => (
  //   <Button className="arrow left" onClick={onClick} sx={arrowStyle}>
  //     <ArrowCircleRightOutlinedIcon style={{ fontSize: "50px", backgroundColor:"red" }} />
  //   </Button>
  // );

  return (
    <>
      <Typography
        variant="h4"
        color="initial"
        fontWeight={"bold"}
        textAlign={"center"}
        lineHeight={2}
      >
        Our Clients Say!
      </Typography>
      <Typography
        component="p"
        color="initial"
        textAlign={"center"}
        sx={{ color: "gray" }}
        marginBottom={"80px"}
      >
        Luxurious PG and Flats for sale or rent in prime locations worldwide
        available now.
      </Typography>

      <Carousel
        responsive={responsive}
        ssr={false} // means to render carousel on server-side.
        // autoPlaySpeed={1000}
        keyBoardControl={true}
        // arrows
        // showDots
        swipeable
      >
        {ProductData}
      </Carousel>
    </>
  );
}

export default Client;
