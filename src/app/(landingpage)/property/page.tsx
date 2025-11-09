"use client";
import {
  Box,
  Breadcrumbs,
  Container,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import Properties from "@/app/component/Properties";
import PropertyList from "@/app/component/propertyList";

export default function Property() {
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      // onClick={handleClick}
    >
      HOME
    </Link>,
    <Typography key="3" sx={{ color: "text.primary" }}>
      PROPERTY
    </Typography>,
  ];
  return (
    <Container maxWidth="xl" sx={{ backgroundColor: "white" }}>
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
              Property List
            </Typography>
            <Stack spacing={2}>
              <Breadcrumbs separator="›" aria-label="breadcrumb">
                {breadcrumbs}
              </Breadcrumbs>
            </Stack>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Box>
            <Image
              src="/carousel-1.jpg"
              alt="fully furnished house"
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
        </Grid>
      </Grid>
      <PropertyList />
      <Properties/>
    </Container>
  );
}
