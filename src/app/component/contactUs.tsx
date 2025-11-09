"use client";
import {
  Box,
  Button,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, {ChangeEvent, FormEvent} from "react";
import { Email, LocationOn, Phone } from "@mui/icons-material";

interface userData {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function ContactUs() {
  const [formData, setformData] = React.useState<userData>(
    {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  );
  const [error, setError] = React.useState<userData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const properties = [
    {
      logo: <LocationOn sx={{ color: "#00b98e" }} />,
      details:
        "C-47(SH-120), Sector 63 A, Noida, Chotpur, Uttar Pradesh 201301",
      link: "https://www.google.com/maps/place/Innoblooms:+Website+Designing+%7C+Web+Development+%7C+Digital+Marketing+%7C+Software+Development/@28.6227474,77.3932646,17z/data=!3m1!4b1!4m22!1m15!4m14!1m6!1m2!1s0x390cef34aad0c8e5:0xac55a4bbdbb9f0f1!2sInnoblooms:+Website+Designing+%7C+Web+Development+%7C+Digital+Marketing+%7C+Software+Development,+Sector+63+A,+Noida,+Uttar+Pradesh!2m2!1d77.3958306!2d28.622817!1m6!1m2!1s0x390cef34aad0c8e5:0xac55a4bbdbb9f0f1!2sC-47(SH-120,+Sector+63+A,+Noida,+Chotpur,+Uttar+Pradesh+201307!2m2!1d77.3958306!2d28.622817!3m5!1s0x390cef34aad0c8e5:0xac55a4bbdbb9f0f1!8m2!3d28.6227427!4d77.3958395!16s%2Fg%2F11w234mhjf?entry=ttu&g_ep=EgoyMDI1MDEyNy4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      logo: <Email sx={{ color: "#00b98e" }} />,
      details: "info@homerent.co.in",
      link: "mailto:jupiterenterprisesho@gmail.com",
    },
    {
      logo: <Phone sx={{ color: "#00b98e" }} />,
      details: "+012 345 6789",
      link: "tel: +91 8272833134",
    },
  ];
  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setformData((prev) => ({ ...prev, [name]: value }));
    setError((prev) => ({ ...prev, [name]: "" }));
  };
  const validate = () => {
    let isValid = true;
    const newError: userData = {};
    if (!formData.name) {
      isValid = false;
      newError.name = "Full name is required";
    }
    if (!formData.email) {
      isValid = false;
      newError.email = "Valid Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newError.email = "Please enter a valid email address.";
    }
    if (!formData.subject) {
      isValid = false;
      newError.subject = "Subject is required";
    }
    if (!formData.message) {
      isValid = false;
      newError.message = "This field is required";
    }
    setError(newError);
    return isValid;
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully");
      setformData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  };
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
          For further information, visit our website or contact us.
        </Typography>
        <Typography
          variant="subtitle1"
          color="#666565"
          fontSize="1.2rem"
          mb={3}
          fontWeight={400}
        >
          Luxurious PG and Flats for sale or rent in prime locations worldwide
          available now.
        </Typography>
      </Grid>

      {properties.map((property, index) => (
        <Grid
          size={{ xs: 12, sm: 6, md: 4 }}
          key={index}
          sx={{
            display: "flex",
            alignItems: "center",
            border: "1px dotted #00b98e",
            borderRadius: "2px",
            backgroundColor: "#EFFDF5",
            padding: "15px",
            boxSizing: "border-box",
            color: "#666565",
            "&:hover": {
              boxShadow: "0px 4px 20px rgba(0, 185, 142, 0.2)",
              backgroundColor: "#00b98e",
              cursor: "pointer",
              color: "white",
            },
            // outline:'10px solid #00b98e'
          }}
        >
          <Box
            sx={{
              borderRadius: "50%",
              width: 50,
              height: 50,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white",
              border: "2px dotted #00b98e",
              padding: 2,
              margin: "0 1rem",
            }}
          >
            {property.logo}
          </Box>
          <Stack component="a" href={property.link} target="_blank">
            <Typography
              variant="subtitle1"
              sx={{ fontSize: "calc(1.1rem + 0.1vw)", lineHeight: "1.3" }}
            >
              {property.details}
            </Typography>
          </Stack>
        </Grid>
      ))}
      <Grid size={{ xs: 12, md: 6 }} sx={{ minHeight: "350px" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1472.5060662393373!2d77.39486879842131!3d28.622886564510303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef34aad0c8e5%3A0xac55a4bbdbb9f0f1!2sInnoblooms%3A%20Website%20Designing%20%7C%20Web%20Development%20%7C%20Digital%20Marketing%20%7C%20Software%20Development!5e0!3m2!1sen!2sin!4v1743745500879!5m2!1sen!2sin"
          style={{ border: "2px solid #00b98e", borderRadius: "5px" }}
          width="100%"
          height="100%"
          loading="lazy"
        />
      </Grid>
      <Grid container size={{ xs: 12, md: 6 }}>
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 6}}>
              <TextField
                name="name"
                placeholder="Enter Your Name"
                variant="outlined"
                size="medium"
                value={formData.name}
                onChange={handleChange}
                label="Your Name"
                fullWidth
                error={!!error.name}
                helperText={error.name}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6}}>
              <TextField
                name="email"
                placeholder="Enter Your Email"
                variant="outlined"
                size="medium"
                value={formData.email}
                onChange={handleChange}
                label="Your Email"
                fullWidth
                error={!!error.email}
                helperText={error.email}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 12}}>
              <TextField
                name="subjet"
                placeholder="Subject"
                variant="outlined"
                size="medium"
                value={formData.subject}
                onChange={handleChange}
                label="Subject"
                fullWidth
                error={!!error.subject}
                helperText={error.subject}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 12}}>
              <TextField
                name="message"
                placeholder="Message"
                variant="outlined"
                size="medium"
                value={formData.message}
                onChange={handleChange}
                label="Message"
                multiline
                rows={8}
                fullWidth
                error={!!error.message}
                helperText={error.message}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 12 }}>
              <Button
                type="submit"
                variant="contained"
                size="large"
                fullWidth
                sx={{
                  mt: 1,
                  mb: 1,
                  backgroundColor: "#00b98e",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
}
