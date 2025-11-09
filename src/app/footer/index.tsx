"use client";
import {
  Email,
  Facebook,
  Instagram,
  LinkedIn,
  LocationOn,
  Phone,
  Twitter,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function Footer() {
  const HoverTypography = styled(Typography)({
    transition: "letter-spacing 0.3s ease-in-out",
    "&:hover": {
      letterSpacing: "0.1em",
    },
    color: "rgba(255, 255, 255, 0.5)",
    marginBottom: "8px",
    display: "flex",
    gap: "5px",
    alignItems: "center",
  });

  let date = new Date();
  let thisYear = date.getFullYear();
  return (
    <Container
      maxWidth="xl"
      sx={{
        backgroundColor: "#0E2E50",
        paddingTop: 10,
        paddingInline: 2,
      }}
    >
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 4 }}>
          <Typography
            variant="h6"
            color="white"
            fontWeight="bolder"
            paddingBlock="15px"
          >
            Get In Touch
          </Typography>
          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            component="a"
            href="https://www.google.com/maps/place/Innoblooms:+Website+Designing+%7C+Web+Development+%7C+Digital+Marketing+%7C+Software+Development/@28.6227474,77.3932646,17z/data=!3m1!4b1!4m22!1m15!4m14!1m6!1m2!1s0x390cef34aad0c8e5:0xac55a4bbdbb9f0f1!2sInnoblooms:+Website+Designing+%7C+Web+Development+%7C+Digital+Marketing+%7C+Software+Development,+Sector+63+A,+Noida,+Uttar+Pradesh!2m2!1d77.3958306!2d28.622817!1m6!1m2!1s0x390cef34aad0c8e5:0xac55a4bbdbb9f0f1!2sC-47(SH-120,+Sector+63+A,+Noida,+Chotpur,+Uttar+Pradesh+201307!2m2!1d77.3958306!2d28.622817!3m5!1s0x390cef34aad0c8e5:0xac55a4bbdbb9f0f1!8m2!3d28.6227427!4d77.3958395!16s%2Fg%2F11w234mhjf?entry=ttu&g_ep=EgoyMDI1MDEyNy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            sx={{
              color: "rgba(255, 255, 255, 0.5)",
            }}
          >
            <LocationOn />
            <Typography
              sx={{
                color: "rgba(255, 255, 255, 0.5)",
                width: { xs: "100%", lg: "70%" },
              }}
            >
              C-47(SH-120), Sector 63 A, Noida, Chotpur, Uttar Pradesh 201301
            </Typography>
          </Stack>
          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            component="a"
            href="tel: +91 8272833134"
            sx={{ color: "rgba(255, 255, 255, 0.5)", paddingTop: 1 }}
          >
            <Phone />
            <Typography sx={{ color: "rgba(255, 255, 255, 0.5)" }}>
              (+91) 8979799833
            </Typography>
          </Stack>
          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            component="a"
            href="mailto:jupiterenterprisesho@gmail.com"
            sx={{ color: "rgba(255, 255, 255, 0.5)", paddingTop: 1 }}
          >
            <Email />
            <Typography sx={{ color: "rgba(255, 255, 255, 0.5)" }}>
              info@homerent.co.in
            </Typography>
          </Stack>
          <Box>
            <Box sx={{ pt: 2, display: "flex", gap: 1 }}>
              <Link
                href="https://x.com/services21256"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton
                  sx={{
                    color: "white",
                    border: "1px solid rgba(255,255,255,0.5)",
                    "&:hover": {
                      background: "white",
                      color: "#00b98e ",
                    },
                  }}
                >
                  <Twitter />
                </IconButton>
              </Link>
              <Link
                href="https://www.facebook.com/people/Innoblooms-Info-Services-Pvt-Ltd/100095194770163/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton
                  sx={{
                    color: "white",
                    border: "1px solid rgba(255,255,255,0.5)",
                    "&:hover": {
                      background: "white",
                      color: "#00b98e ",
                    },
                  }}
                >
                  <Facebook />
                </IconButton>
              </Link>
              <Link
                href="https://www.instagram.com/innoblooms_info/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton
                  sx={{
                    color: "white",
                    border: "1px solid rgba(255,255,255,0.5)",
                    "&:hover": {
                      background: "white",
                      color: "#00b98e ",
                    },
                  }}
                >
                  <Instagram />
                </IconButton>
              </Link>
              <Link
                href="https://in.linkedin.com/company/innoblooms-info-services-pvt-ltd"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton
                  sx={{
                    color: "white",
                    border: "1px solid rgba(255,255,255,0.5)",
                    "&:hover": {
                      background: "white",
                      color: "#00b98e ",
                    },
                  }}
                >
                  <LinkedIn />
                </IconButton>
              </Link>
            </Box>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Typography
            variant="h6"
            color="white"
            fontWeight="bolder"
            paddingBlock="15px"
          >
            Quick Links
          </Typography>
          <HoverTypography>
            <ChevronRightIcon />
            <Link href="/about">About Us</Link>
          </HoverTypography>
          <HoverTypography>
            <ChevronRightIcon />
            <Link href="/contact" target="_blank">
              Contact Us
            </Link>
          </HoverTypography>
          <HoverTypography>
            <ChevronRightIcon />
            <Link href="/enquiry" target="_blank">
              Our Services
            </Link>
          </HoverTypography>
          <HoverTypography>
            <ChevronRightIcon />
            <Link href={"https://www.google.com/"} target="_blank">
              Privacy Policy
            </Link>
          </HoverTypography>
          <HoverTypography>
            <ChevronRightIcon />
            <Link href={"https://www.google.com/"} target="_blank">
              Terms & Conditions
            </Link>
          </HoverTypography>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Typography
            variant="h6"
            color="white"
            fontWeight="bolder"
            paddingBlock="15px"
          >
            Newsletter
          </Typography>
          <Typography
            variant="body1"
            color="white"
            paddingBottom={2}
            gutterBottom
          >
            To get latest update subscribe to our updates
          </Typography>
          <Box
            sx={{
              position: "relative",
              maxWidth: 400,
              border: "1px solid #00b98e",
              borderRadius: "8px",
            }}
          >
            <TextField
              fullWidth
              placeholder="Your email"
              variant="outlined"
              size="small"
              sx={{
                bgcolor: "transparent",

                "& .MuiOutlinedInput-root": {
                  color: "white ",
                  padding: "6px 90px 6px 5px",
                  "&:hover fieldset": {
                    borderColor: "green",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#00b98e",
                  },
                },
              }}
            />
            <Button
              variant="contained"
              size="small"
              sx={{
                position: "absolute",
                top: "50%",
                right: 8,
                padding: "3px 6px",
                transform: "translateY(-50%)",
                color: "white",
                backgroundColor: "#00b98e ",
                fontSize: "1.1rem",
              }}
            >
              SignUp
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Divider sx={{ bgcolor: "primary.light", marginTop: 3 }} />
      <Grid
        container
        padding="35px 0"
        justifyContent={{ xs: "center", md: "space-between" }}
        gap={{ xs: 2 }}
      >
        <Grid>
          <Typography color="white" textAlign={{ xs: "center" }}>
            &#169; <Link href="#">Homerent</Link>, {thisYear} All Right
            Reserved. Designed By{" "}
            <Link href="https://innoblooms.com/index.html" target="_blank">
              Innoblooms
            </Link>
          </Typography>
        </Grid>
        <Grid>
          <Box sx={{ display: "flex", gap: "30px" }}>
            <Typography color="white">
              <Link href="#">Home</Link>
            </Typography>
            <Typography color="white">
              <Link href="#">Cookies</Link>
            </Typography>
            <Typography color="white">
              <Link href="#">Help</Link>
            </Typography>
            <Typography color="white">
              <Link href="#">FAQ</Link>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
