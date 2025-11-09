"use client";
import {
  Box,
  Button,
  DialogTitle,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React, { FormEvent, useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalHotelIcon from "@mui/icons-material/LocalHotel";
import BathtubSharpIcon from "@mui/icons-material/BathtubSharp";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Bookform from "./actionButton/BookButton";
import CloseIcon from "@mui/icons-material/Close";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useRouter } from "next/navigation";
import axios from "axios";

import { propertyImages } from "../utils/products";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRulerCombined,
  faRupeeSign,
} from "@fortawesome/free-solid-svg-icons";

export default function Properties() {
 interface FormData {
    title?:string;
    fname?:string;
    lname?:string;
    email?:string;
    phone?:string;
    occupation?:string;
    otherOccupation?:string;
    enquiryType?:string;
    enquiryDetails?:string;
 }

  const [showAll, setShowAll] = useState(false);
  const handleSeeMore = () => {
    setShowAll(true);
  };

  const [propertyData, setPropertyData] = useState<any[]>([]);
  const getdata = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/properties/get`
      );
      setPropertyData(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  React.useEffect(() => {
    getdata();
  }, []);

  const imagesToShow = showAll ? propertyImages : propertyImages.slice(0, 6);
  const [open, setOpen] = React.useState(false);
  const [select, setSelect] = React.useState<FormData>({
    title: "",
    fname: "",
    lname: "",
    email: "",
    phone: "",
    occupation: "",
    otherOccupation: "",
    enquiryType: "",
    enquiryDetails: "",
  });
  const [error, setError] = React.useState<FormData>({
    title: "",
    fname: "",
    lname: "",
    email: "",
    phone: "",
    occupation: "",
    otherOccupation: "",
    enquiryType: "",
    enquiryDetails: "",
  });
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const validate = () => {
    let isValid = true;
    const newError: FormData = {};
    if (!select.title) {
      newError.title = "Title is Required";
      isValid = false;
    }
    if (!select.fname) {
      newError.fname = "First name is Required";
      isValid = false;
    }
    if (!select.lname) {
      newError.lname = "Last name is Required";
      isValid = false;
    }
    if (!select.email) {
      newError.email = "Email is Required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(select.email)) {
      newError.email = "Invalid email format.";
      isValid = false;
    }
    if (!select.phone) {
      newError.phone = "Phone is Required";
      isValid = false;
    }
    if (!select.occupation) {
      newError.occupation = "Occupation is Required";
      isValid = false;
    }
    if (select.occupation === "other" && !select.otherOccupation) {
      newError.otherOccupation = "Occupation is Required";
      isValid = false;
    }
    if (!select.enquiryType) {
      newError.enquiryType = "This field is Required";
      isValid = false;
    }
    if (!select.enquiryDetails) {
      newError.enquiryDetails = "This field is Required";
      isValid = false;
    }
    setError(newError);
    return isValid;
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully");
      setSelect({
        title: "",
        fname: "", 
        lname: "",
        email: "",
        phone: "",
        occupation: "",
        otherOccupation: "",
        enquiryType: "",
        enquiryDetails: "",
      });
    }
  };
  const router = useRouter();

  const handlePropertyClick = (id:number) => {
    router.push(`/${id}`);
  };
  return (
    <>
      <Typography
        // variant="h4"
        color="initial"
        sx={{
          fontWeight: "bold",
          fontFamily: "sans-serif",
          paddingTop: "20px",
          paddingLeft: "30px",
          fontSize: { xs: "1.73rem", md: "2.37rem" },
        }}
      >
        Property Listing
      </Typography>
      <Typography
        component="p"
        color="initial"
        sx={{
          fontSize: { xs: "1.1rem", md: "1.25rem" },
          fontWeight: "regular",
          fontFamily: "sans-serif",
          paddingLeft: "30px",
          paddingTop: "15px",
          color: "gray",
          marginBottom: "70px",
        }}
      >
        Luxurious PG, homes and apartments for sale or rent in prime locations.
      </Typography>
      <Grid container spacing={4}>
        {propertyData.map((img, index) => (
          // <Grid size={{ xs: 1, md: 4 }} key={index}>
          <Grid
            size={{ xs: 12, sm: 6, md: 4 }}
            key={index}
            sx={{
              position: "relative",
              // marginBottom: "30px",
              borderRadius: "5px",
              boxShadow: "0 0 30px rgba(0, 0, 0, .08)",
            }}
          >
            <Box
              sx={{
                overflow: "hidden",
                borderRadius: "5px",
                position: "relative",
                "&:hover": { cursor: "pointer" },
                transition: "transform 0.3s ease-in-out",
                "&:hover img": {
                  transform: "scale(1.03)",
                },
              }}
            >
              <Carousel showThumbs={false} autoPlay={true}>
                {img.userPhoto.length != 0 ? (
                  img.userPhoto.map((url: string, i: number) => (
                    <div key={i} onClick={() => handlePropertyClick(img.id)}>
                      <img src={url} alt="alt text" />
                    </div>
                  ))
                ) : (
                  <div style={{backgroundColor:'grey'}}>
                    <img src="/noImage.png" style={{width:'250px', height:'auto', }} alt="alt text" />
                  </div>
                )}
              </Carousel>
              {/* <Image
                onClick={() => handlePropertyClick(img.id)}
                src={img.src[0]}
                width={480}
                height={300}
                alt={img.alt}
                style={{
                  objectFit: "cover",
                  width: "100%",
                  // height:"100%",
                  borderRadius: "5px",
                }}
              /> */}

              <Typography
                sx={{
                  position: "absolute",
                  left: "5%",
                  top: "5%",
                  bgcolor: "#00B98E",
                  color: "white",
                  fontSize: "bold",
                  padding: "6px 15px",
                  borderRadius: "5px",
                  border:'2px solid white'
                }}
              >
                For Rent
              </Typography>
              <Typography
                sx={{
                  position: "absolute",
                  left: "5%",
                  bottom: "-15px",
                  transform: "translateY(-30%)",
                  bgcolor: "white",
                  color: "#00B98E",
                  fontSize: "bold",
                  padding: "6px 20px",
                  borderRadius: "5px",
                }}
              >
                {img.property}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "5px 10px",
                paddingTop: "20px",
              }}
            >
              <Box
                sx={{
                  color: "#00B98E",
                  fontWeight: "bold",
                  fontSize: "20px",
                }}
              >
                {" "}
                <FontAwesomeIcon icon={faRupeeSign} />
                {". "}
                {img.price}{" "}
              </Box>
              <Button
                onClick={handleClickOpen}
                sx={{
                  color: "#00B98E",
                  border: "1px solid #00B98E ",
                  "&:hover": { bgcolor: "#00B98E", color: "black" },
                }}
              >
                Book Now
              </Button>
            </Box>

            <Typography
              sx={{
                marginBottom: ".7rem",
                padding: "1px 10px",
                fontSize: "20px",
                fontWeight: "bold",
                color: "black",
                "&:hover": { color: "#00B98E" },
              }}
            >
              {img.type}
            </Typography>

            <Box sx={{ display: "flex" }}>
              <LocationOnIcon sx={{ color: "#00B98E", margin: "0 5px 1rem" }} />
              <Typography sx={{ color: "gray" }}>
                {img.city} {img.location}
              </Typography>
            </Box>

            <Box
              sx={{
                borderTop: "1px dashed #00B98E",
                display: "flex",
                gap: "5px",
                justifyContent: "space-around",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  paddingBlock: "8px",
                  display: "flex",
                  gap: "5px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FontAwesomeIcon icon={faRulerCombined} color="#00b98e" />
                <Typography sx={{ color: "gray" }}>
                  {img.area} {"Sqft"}
                </Typography>
              </Box>
              <Box borderRight="1px dashed #00B98E" />
              <Box
                sx={{
                  paddingBlock: "8px",
                  display: "flex",
                  gap: "5px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <LocalHotelIcon sx={{ color: "#00B98E" }} />
                <Typography sx={{ color: "gray" }}> {img.details}</Typography>
              </Box>
              <Box borderRight="1px dashed #00B98E" />
              <Box
                sx={{
                  paddingBlock: "8px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <BathtubSharpIcon sx={{ color: "#00B98E" }} />
                <Typography sx={{ color: "gray" }}>
                  {img.bathrooms} {"Bath"}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
        <Grid size={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSeeMore}
            sx={{
              display: "block",
              margin: "1rem auto 3rem",
              padding: "1rem 3rem",
              fontSize: "1rem",
              backgroundColor: "#00b98e",
            }}
          >
            Browse More Property
          </Button>
        </Grid>
      </Grid>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle
          id="scroll-dialog-title"
          sx={{
            // height: "100%",
            width: "100%",
            bgcolor: "#00b98e",
            marginBottom: "30px",
          }}
        >
          {" "}
          Property Inquiry
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.grey[100],
          })}
        >
          <CloseIcon />
        </IconButton>
        <Box component={"form"} onSubmit={handleSubmit}>
          <DialogContent dividers>
            <Bookform
              error={error}
              select={select}
              setError={setError}
              setSelect={setSelect}
            />
          </DialogContent>
          <DialogActions sx={{ marginBottom: "20px" }}>
            <Button
              onClick={handleClose}
              variant="outlined"
              sx={{
                bgcolor: "#FF6922",
                borderColor: "#FF6922",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Cancel
            </Button>
            <Button
              // onClick={handleChange }
              type="submit"
              variant="outlined"
              sx={{
                bgcolor: "#00b98e",
                borderColor: "#00b98e",
                color: "white",
                fontWeight: "bold",
              }}
            >
              submit
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </>
  );
}
