import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";

export default function ImageElements(props: any) {
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        gap: "20px",
        marginBottom: "30px",
        padding: "6px",
      }}
    >
      <Box
        sx={{
          minWidth: "350px",
          border: "9px solid #EFFDF5",
          padding: "10px",
          borderRadius: "20px",
        }}
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                "&:hover":{cursor:"pointer",},
                overflow: "hidden",
                borderRadius: "5px",
                  transition: "transform 0.3s ease-in-out",
                "&:hover img": {
                  transform: "scale(1.03)",
                },
              }}
            >
              <Image
                src={props.src}
                height={100}
                width={200}
                style={{
                  borderRadius: "5%",
                  border: "2px solid #EFFDF5",
                  objectFit: "cover",
                }}
                alt={props.alt}

                // layout="responsive"
              />
            </Box>
            <Typography>{props.name}</Typography>
            {props.rating}
          </Box>
          <Box sx={{ textAlign: "justify" }}>{props.description}</Box>
        </Box>
      </Box>
    </Container>
  );
}
