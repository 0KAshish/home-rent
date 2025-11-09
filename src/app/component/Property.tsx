"use client";
import { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,Grid
} from "@mui/material";
// import Grid from '@mui/material/Grid';

import LocationOnIcon from "@mui/icons-material/LocationOn";
import Image from "next/image";
import Bookform from "./actionButton/BookButton";
import CloseIcon from "@mui/icons-material/Close";
import { propertyImages } from "../utils/products";
import KeyboardDoubleArrowDownSharpIcon from "@mui/icons-material/KeyboardDoubleArrowDownSharp";
import KeyboardDoubleArrowUpSharpIcon from "@mui/icons-material/KeyboardDoubleArrowUpSharp";
// import KeyboardDoubleArrowLeftSharpIcon from '@mui/icons-material/KeyboardDoubleArrowLeftSharp';
// import KeyboardDoubleArrowRightSharpIcon from '@mui/icons-material/KeyboardDoubleArrowRightSharp';



const Property= (props: any)=> {
  const [open, setOpen] = useState(false);
  const [selectImage, setSelectImage] = useState(0);
  const [selectImages, setSelectImages] = useState(0);

  const [showUpperImages, setShowUpperImages] = useState(true);
const [select, setSelect] = useState({
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
  const [error, setError] = useState({
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
  const property = propertyImages.find(
    (item: any) => item.id === Number(props?.id)
  );

  if (!property) {
    return <div>Property not found</div>;
  }
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const validate = () => {
    let isValid = true;
    const newError: any = {};
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

  const handleSubmit = (e: any) => {
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
  const upperImages =property.src.slice(0, 3);
  const lowerImages =property.src.slice(3);


  const newImage = (index:any) => {
    setSelectImage(showUpperImages ? index : index + 4);
  };

  console.log(property.src[selectImage]);

  const handleChangeUp = () => {
    setShowUpperImages(true);
    setSelectImages(1);
  };

  const handleChangeDown = () => {
    setShowUpperImages(false);
    setSelectImages(0);
  };
  return (
    <>
      <Grid
       container
       spacing={5}
        sx={{
          marginBottom: "40px",
          padding: "26px 60px",
          // bgcolor:"gray",
        }}
      >
    
        <Grid size={{ xs: 12, md: 2 }} sx={{
            display: "flex",
            flexDirection: { xs: "row", md: "column" },
            gap: "1px",
            
            paddingLeft: { md: "8%" },
          }}>
          {showUpperImages && (
            <>
              {upperImages.map((item, index) => (
                <Image
                  key={index}
                  onClick={() => newImage(index)}
                  src={item}
                  alt='images'
                  width={100}
                  height={100}
                  style={{
                    height: "auto",
                    borderRadius: "3px",
                    border: selectImage === index
                      ? "2px solid blue" 
                      : "2px solid transparent",
                    cursor: "pointer",
                  }}
                />
              ))}
              {lowerImages.length > 0 && (
                <KeyboardDoubleArrowDownSharpIcon
                  onClick={handleChangeDown}
                  sx={{ margin: "0 auto", cursor: "pointer" }}
                />
              )}
            </>
          )}

          {!showUpperImages && (
            <>
              <KeyboardDoubleArrowUpSharpIcon 
                onClick={handleChangeUp}
                sx={{ margin: "0 auto", cursor: "pointer" }}
              />
              {lowerImages.map((item, index) => (
                <Image
                  key={index + 1}
                  onClick={() => newImage(index)}
                  src={item}
                  alt='image2'
                  width={100}
                  height={100}
                  style={{
                    height: "auto",
                    borderRadius: "3px",
                    border: selectImages === index +1
                      ? "2px solid blue"
                      : "2px solid transparent",
                    cursor: "pointer",
                  }}
                />
              ))}
            </>
          )}
        </Grid>
        
       
        <Grid size={{ xs: 12, md: 5 }}>
          <Image
            src={property.src[selectImage]}
            alt={property.alt}
            height={200}
            width={600}
            style={{
              height: "auto",
              // height: "500px",
              width: "100%",
              borderRadius: "8px",
            }}
          />
        </Grid>

        <Grid
          size={{ xs: 12, md: 5 }}
          sx={{ paddingLeft: { md: "70px" }, margin: "auto" }}
        >
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            {property.rentType}
          </Typography>
          <Box>
            <Typography
              variant="h5"
              sx={{ color: "#00B98E", fontWeight: "bold", marginTop: "10px" }}
            >
              {property.price}
            </Typography>
            <Typography
              variant="h5"
              sx={{ color: "#00B98E", fontWeight: "bold", marginTop: "3px" }}
            >
              <LocationOnIcon sx={{ color: "#00B98E" }} />
              {property.location}
            </Typography>
            <Typography>Type: {property.type}</Typography>
            <Typography>Size: {property.size}</Typography>
            <Typography>Style: {property.style}</Typography>
            <Typography>Bathrooms: {property.quantity}</Typography>
          </Box>

          <Button
            onClick={handleClickOpen}
            style={{
              marginTop: "30px",
              padding: "8px 16px",
              backgroundColor: "#00B98E",
              color: "white",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Book Now
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
export default Property;