import {
  Box,
  Button,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
import CheckIcon from "@mui/icons-material/Check";

export default function About() {
  const AboutImageContainer = styled(Box)(({ theme }) => ({
    position: "relative",
    overflow: "hidden",
    padding: theme.spacing(5),
    paddingRight: 0,
    "&::before": {
      position: "absolute",
      content: '""',
      top: 0,
      left: "-50%",
      width: "100%",
      height: "100%",
      backgroundColor: "#00b98e",
      transform: "skew(20deg)",
    },
  }));

  const AboutImage = styled("img")({
    position: "relative",
    width: "90%",
    height: "auto",
  });

  return (
    <Grid container paddingBlock={2}>
      <Grid size={{ xs: 12, md: 6 }} padding={2}>
        <AboutImageContainer>
          <AboutImage src="/carousel-1.jpg" alt="About us" />
        </AboutImageContainer>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }} alignContent="center" padding={2}>
        <Box>
          <Typography
            variant="h2"
            color="var(--basic-font-color)"
            fontWeight={700}
            fontSize="calc(1.1rem + 2.1vw)"
            pb={2}
          >
            #1 Place To Find The Perfect Property
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ textAlign: "justify", lineHeight: 1.5, color: "#666565" }}
          >
            Searching for your dream property? We&apos;ve got you covered! With a
            diverse range of options, finding the perfect match has never been
            simpler. Whether you&apos;re looking for a new home or an investment
            opportunity, we make it easy for you to explore and choose the best.
            Start your journey with us today!
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <CheckIcon sx={{ color: "#00b98e" }} />
              </ListItemIcon>
              <ListItemText
                primary="Explore a comprehensive range of properties tailored to fit your needs and lifestyle."
                sx={{ textAlign: "justify", color: "#666565" }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckIcon sx={{ color: "#00b98e" }} />
              </ListItemIcon>
              <ListItemText
                primary="Enjoy a hassle-free search with our user-friendly platform designed to save you time and effort."
                sx={{ textAlign: "justify", color: "#666565" }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckIcon sx={{ color: "#00b98e" }} />
              </ListItemIcon>
              <ListItemText
                primary="Receive guidance and support to ensure you make informed decisions while choosing your ideal property."
                sx={{ textAlign: "justify", color: "#666565" }}
              />
            </ListItem>
          </List>
          <Button
            variant="contained"
            color="primary"
            sx={{
              padding: "1rem 3rem",
              fontSize: "1rem",
              backgroundColor: "#00b98e",
            }}
          >
            Learn More
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}
