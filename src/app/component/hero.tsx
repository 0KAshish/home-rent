"use client";
import { Grid, Typography, Button, Box } from "@mui/material";
import React, {useEffect, useMemo} from "react";
import Image from "next/image";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function Hero() {
  const [current, setCurrent] = React.useState(0);

  const images = useMemo(
    () => [
      { src: "/carousel-1.jpg", alt: "fully furnished house" },
      { src: "/carousel-2.jpg", alt: "fully furnished house" },
    ],
    []
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  function handleLeft() {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  }
  function handleRight() {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  }
  return (
    <Grid container direction={{ xs: "column-reverse", md: "row" }}>
      <Grid
        size={{ xs: 12, md: 6 }}
        justifyContent="center"
        alignContent="center"
      >
        <Box sx={{ padding: { xs: "30px 20px", md: "40px" } }}>
          <Typography
            variant="h1"
            color="var(--basic-font-color)"
            fontWeight="700"
            fontSize="calc(1.1rem + 2.1vw)" // "3.5rem"
            mb={3}
          >
            Find A{" "}
            <Box component="span" sx={{ display: "inline", color: "#00b98e" }}>
              Perfect Home
            </Box>{" "}
            To Live With Your Family
          </Typography>
          <Typography
            variant="subtitle1"
            color="#666565"
            fontSize="1.2rem"
            mb={3}
            fontWeight={400}
          >
            Luxurious PG and Flats for sale or rent in prime locations worldwide
            available now.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{
              padding: "1rem 3rem",
              fontSize: "1rem",
              backgroundColor: "#00b98e",
            }}
          >
            get started
          </Button>
        </Box>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Box sx={{ position: "relative" }}>
          <Button
            sx={{
              position: "absolute",
              top: "42%",
              left: { xs: "30px", md: "-30px" },
            }}
            onClick={handleLeft}
          >
            <ChevronRightIcon
              sx={{
                width: "50px",
                height: "50px",
                backgroundColor: "#00b98e",
                borderRadius: "50%",
                color: "white",
              }}
            />
          </Button>
          <Button
            sx={{
              position: "absolute",
              top: "55%",
              left: { xs: "30px", md: "-30px" },
            }}
            onClick={handleRight}
          >
            <ChevronRightIcon
              sx={{
                color: "white",
                width: "50px",
                height: "50px",
                backgroundColor: "#00b98e",
                borderRadius: "50%",
                transform:'rotate(180deg)'
              }}
            />
          </Button>
          {images.map(
            (img, index) =>
              current === index && (
                <Box
                  key={index}
                  sx={{
                    opacity: current === index ? 1 : 0,
                    transition: "opacity 5s linear",
                  }}
                >
                  <Image
                    src={images[current].src}
                    alt={images[current].alt}
                    width={740}
                    height={500}
                    style={{
                      borderRadius: 3,
                      maxHeight: 500,
                      height: "auto",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              )
          )}
        </Box>
      </Grid>
    </Grid>
  );
}
