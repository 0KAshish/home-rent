import {
  Box,
  Button,
  Divider,
  Grid,
  InputBase,
  Paper,
  Switch,
  Tooltip,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import CheckSharpIcon from "@mui/icons-material/CheckSharp";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";


const label = { inputProps: { "aria-label": "Color switch demo" } };
export default function BasicProfile() {
  return (
    <>
   
      <Grid container>
        <Grid size={{ xs: 12, md: 12 }}>
          <Typography sx={{ padding: "20px", fontWeight: "bold" }}>
            Edit Your Profile
          </Typography>
          <Divider
            orientation="horizontal"
            variant="middle"
            flexItem
            sx={{ marginBottom: "10px" }}
          />
        </Grid>
        
        <Grid size={{ xs: 12, md: 6 }} sx={{ padding:{xs:"10px 10px",md:"10px 60px" } }}>
          <Typography >Name</Typography>
          {/* <TextField fullWidth size="small"/> */}
          <Paper
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width:{xs:270,md:400},
                height:"47px",
                boxShadow:"0 0 5px gray",
                borderRadius: "10px",
                // marginBottom: "20px",
              }}
            >
              <InputBase sx={{ ml: 1, flex: 1 }}/>
            </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 12}} sx={{ paddingLeft: { xs: "3%", md: "8%" }, color: "gray" }}>
          <Link href="">Click here to generate email varification mail</Link>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }} sx={{ padding:{xs:"10px 10px",md:"10px 60px" }}}>
          <Typography sx={{}}>Email</Typography>
          {/* <TextField fullWidth size="small" /> */}
          <Paper
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width:{xs:270,md:400},
                height:"47px",
                boxShadow:"0 0 5px gray",
                borderRadius: "10px",
                marginBottom: "20px",
              }}
            >
              <InputBase sx={{ ml: 1, flex: 1 }}/>
            </Paper>
        </Grid>

        <Grid
          size={{ xs: 12, md: 12 }}
          sx={{
            display: "flex",
            gap: "10px",
            padding:{xs:"10px 20px",md:"10px 60px" },
            marginBottom:"30px"
          }}
        >
          <Typography sx={{}}>Mobile</Typography>
          <Typography sx={{ paddingLeft: { xs: "10px", md: "30px" } }}>
            917889667895{" "}
          </Typography>
          <Tooltip title="Phone is verified" sx={{}}>
            <CheckSharpIcon sx={{ color: "green" }} />
          </Tooltip>
        </Grid>
        <Typography
          sx={{
            paddingLeft: { xs: "3%", md: "10%" },
            color: "gray",
            marginBottom: "30px",
          }}
        >
          <Link href="">Click here to generate password reset mail</Link>
        </Typography>
        <Grid size={{ xs: 12, md: 12 }}
          sx={{
            display: "flex",
            gap: "10px",
            paddingLeft: { xs: "2%", md: "10%" },
          }}
        >
          <WhatsAppIcon sx={{ color: "#00B98E" }} />
          <Typography sx={{ color: "gray", marginBottom: "30px" }}>
            <Link href="">Get updates on whatsApp</Link>
          </Typography>
          <Switch {...label} defaultChecked color="success" />
        </Grid>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "30px",
            paddingLeft:{xs:"30%",md:"10%"}
          }}
        >
          <Button variant="contained">Save Profile</Button>
        </Box>
        {/* </Grid> */}
      </Grid>
    </>
  );
}
