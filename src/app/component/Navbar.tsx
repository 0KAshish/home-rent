"use client";
import {
  Typography,
  Link,
  Box,
  Container,
  Collapse,
  IconButton,
  Dialog,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import YardTwoToneIcon from "@mui/icons-material/YardTwoTone";
import MenuIcon from "@mui/icons-material/Menu";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import Signup from "../(landingpage)/profile/Signup";
import Login from "../login/page";
export default function Navbar() {
  const [nav, setNav] = React.useState(false);
  const navLink = ["HOME", "ABOUT", "PROPERTY", "CONTACT", "ENQUIRY"];
  const [openSign, setOpenSign] = useState(false);
  const [login, setLogin] = useState<boolean>(false);
  const handleClick = () => {
    setNav((prev) => !prev);
  };
  const handleClose = () => {
    setOpenSign((prev) => !prev);
    setLogin(false);
  };
  return (
    <Container
      maxWidth="xl"
      sx={{
        backgroundColor: "white",
        zIndex: 99,
        margin: "0 auto",
        padding: "8px 10px",
        position: "sticky",
        top: "0",
        boxShadow: "0 5px 5px rgba(0, 0, 0, 0.1)",
        marginBottom: "5px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minWidth: "200px",
          }}
        >
          <Link href="/">
            <YardTwoToneIcon
              sx={{
                padding: "5px",
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                border: "1px dotted #00b98e",
                color: "#00b98e",
                margin: "0 8px 0 0",
              }}
            />
          </Link>
          <Link href="./" sx={{ textDecoration: "none" }}>
            <Typography
              fontSize="calc(1rem + 1.5vw)"
              fontWeight="700"
              color="#00b98e"
            >
              {" "}
              Home Rent
            </Typography>
          </Link>
        </Box>

        <Box
          sx={{
            minWidth: "30%",
            justifyContent: "space-between",
            alignItems: "center",
            display: { xs: "none", md: "flex" },
          }}
        >
          {navLink.map((links) => (
            <Link
              key={links}
              href={links === "HOME" ? `/` : `/${links.toLowerCase()}`}
              sx={{
                textDecoration: "none",
                color: "black",
                "&:hover": { color: "#00B98E" },
                "&:active": { color: "#00b98e" },
                fontSize: { xs: ".8rem", sm: "1rem" },
                fontWeight: 500,
                margin: { xs: "10px", md: "25px" },
              }}
            >
              {links}
            </Link>

            //   <Link href="" sx={{ textDecoration: "none" }}>
            //   <Typography
            //     fontSize="calc(1.375rem + 1.5vw)"
            //     fontWeight="700"
            //     color="#00b98e"
            //   >
            //     {" "}
            //     Home Rent
            //   </Typography>
            // </Link>
          ))}
        </Box>
        <Box
          width="40px"
          height="40px"
          sx={{
            display: { xs: "flex", md: "none" },
            alignItems: "center",
            justifyContent: "center",
            border: "2px solid #00b98e",
            borderRadius: "5px",
            "&:hover": {
              cursor: "pointer",
              backgroundColor: "#00b98e",
              color: "white",
            },
          }}
          onClick={handleClick} 
        >
          <MenuIcon/>
        </Box>
        {/* <Link href="./profile" sx={{ textDecoration: "none" }}> */}
        {/* <Typography sx={{ padding: { xs: "15px 25px", md: "20px 30px" } }}>
              {" "}
              <Profile />
              <Image
              src="/client2.jpg" alt='img' height="40" width="40" style={{borderRadius:"50%"}}
              />
              </Typography> */}
        <IconButton
          onClick={() => setOpenSign(true)}
          sx={{
            color: "#0E2E50",
            border: "2px solid rgba(80, 79, 79, 0.5)",
            display: { xs: "none",md:"flex" },
            "&:hover": {
              background: "grey",
              color: "#00b98e ",
            },
          }}
        >
          <PersonOutlineIcon />
        </IconButton>
        {/* </Link> */}
      </Box>

      <Collapse in={nav}>
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {navLink.map((links) => (
            <Link
              key={links}
              href={links === "HOME" ? `/` : `/${links.toLowerCase()}`}
              sx={{
                textDecoration: "none",
                color: "black",
                "&:hover": { color: "#00B98E" },
                "&:active": { color: "#00b98e" },
                fontSize: { xs: ".8rem", sm: "1rem" },
                fontWeight: 500,
                margin: "10px",
              }}
            >
              {links}
            </Link>
          ))}
          <Box
            sx={{
              textDecoration: "none",
              color: "black",
              "&:hover": { color: "#00B98E", cursor: "pointer" },
              "&:active": { color: "#00b98e" },
              fontSize: { xs: ".8rem", sm: "1rem" },
              fontWeight: 500,
              margin: "10px",
            }}
          >
            <Typography
              variant="body1"
              color="initial"
              onClick={() => setOpenSign(true)}
            >
              Sign-In
            </Typography>
          </Box>
        </Box>
      </Collapse>
      <Dialog open={openSign} onClose={handleClose}>
        {/* <DialogTitle id="responsive-dialog-title">
          {"SignIn or Signup form"}
        </DialogTitle> */}
        <DialogContent>
          {login ? <Login /> : <Signup setlogin={setLogin} />}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus variant="outlined">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
