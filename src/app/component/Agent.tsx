import { Box, Grid, Typography, Button } from "@mui/material";
import React from "react";
import CallSharpIcon from "@mui/icons-material/CallSharp";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Image from "next/image";

function Agent() {
  return (
    <Grid container>
      <Box
        width="100%"
        sx={{
          padding: { xs: "15px", md: "20px 25px 30px 25px" },
          border: "1px",
          borderRadius: "9px",
          bgcolor: "#EFFDF5",
          margin: "auto",
          marginBottom: { xs: "40px", md: "50px" },
        }}
      >
        <Box
          sx={{
            border: "1px dashed green",
            borderRadius: "2px",
            bgcolor: "white",
            // margin: "auto",
          }}
        >
          <Grid container>
            <Grid size={{ xs: 12, sm: 12, md: 6 }}>
              <Box  sx={{
                 overflow: "hidden",
                borderRadius: "5px",
                  transition: "transform 0.3s ease-in-out",
                "&:hover img": {
                  transform: "scale(1.03)",
                },
              }}>
              <Image
                src="/image.jpg"
                width={700}
                height={450}
                className="zoom-image"
                style={{
                  padding: "10px 20px",
                  borderRadius: 10,
                  maxHeight: 440,
                  height: "auto",
                  width: "100%",
                  objectFit: "cover",
                  cursor: "pointer",
                }}
                alt="Agent picture"
              />
              </Box>
            </Grid>
            <Grid
              size={{ xs: 12, sm: 12, md: 6 }}
              alignContent="center"
              padding={2}
            >
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: "2rem", md: "3rem" },
                  fontWeight: "700",
                  color: "#0E2E50",
                }}
              >
                Contact With Our Certified Agent
              </Typography>
              <Typography
                component="p"
                paddingTop={2}
                sx={{ color: "#666565" }}
              >
                Luxurious PG and Flats for sale or rent in prime locations
                worldwide available now.
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: 2,
                  marginTop: 2,
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    padding: "1rem 1.25rem",
                    fontSize: "1rem",
                    backgroundColor: "#00b98e",
                    whiteSpace: "nowrap",
                  }}
                >
                  <CallSharpIcon sx={{ mr: 1 }} />
                  Make A Call
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    padding: "1rem 1.25rem",
                    fontSize: "1rem",
                    backgroundColor: "#0E2E50",
                    whiteSpace: "nowrap",
                  }}
                >
                  <CalendarMonthIcon sx={{ mr: 1 }} />
                  Get Appointment
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Grid>
  );
}

export default Agent;
