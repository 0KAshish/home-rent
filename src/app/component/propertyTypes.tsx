"use client";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function PropertyTypes() {
  const properties = [
    { logo: "/flat.png", name: "Flat", count: "100", alt: "flat icon" },
    { logo: "/pg.png", name: "PG", count: "100", alt: "pg icon" },
    { logo: "/home.png", name: "Villa", count: "100", alt: "villa icon" },
  ];
  return (
    <Grid container spacing={3} padding={3}>
      <Grid size={12} textAlign="center">
        <Typography
          variant="h2"
          color="var(--basic-font-color)"
          fontWeight={700}
          fontSize="calc(1.1rem + 2.1vw)"
          padding="30px 0 10px"
        >
          Property Types
        </Typography>
        <Typography
          variant="subtitle1"
          color="#666565"
          fontSize="1.2rem"
          mb={3}
          fontWeight={400}
        >
          Luxurious PG and Flat for sale or rent in prime locations worldwide
          available now.
        </Typography>
      </Grid>

      {properties.map((property, index) => (
        <Grid
          size={{ xs: 12, sm: 6, md: 4 }}
          key={index}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            border: "1px dotted #00b98e",
            borderRadius: "2px",
            backgroundColor: "#EFFDF5",
            padding: "20px",
            boxSizing: "border-box",
            margin: "10px 0",
            "&:hover": {
              boxShadow: "0px 4px 20px rgba(0, 185, 142, 0.2)",
              backgroundColor: "#00b98e",
              cursor: "pointer",
              color: "white",
            },
          }}
        >
          <Box
            sx={{
              borderRadius: "50%",
              width: 90,
              height: 90,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "white",
              border: "2px dotted #00b98e",
              padding: 2,
              mb: 1,
            }}
          >
            <Image
              src={property.logo}
              alt={property.alt}
              width={50}
              height={50}
              style={{ objectFit: "contain" }}
            />
          </Box>
          <Typography variant="subtitle1" color="initial">
            {property.name}
          </Typography>
          <Typography variant="h6">{property.count} Properties</Typography>
        </Grid>
      ))}
    </Grid>
  );
}
