import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, {ChangeEvent} from "react";
import { SelectChangeEvent } from "@mui/material";

export default function Bookform({setError,setSelect,error,select}:any) {
  const handleChange = (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>| SelectChangeEvent) => {
    const { name, value } = e.target;
    setSelect((prev:any) => ({ ...prev, [name]: value }));
    setError((prev:any) => ({ ...prev, [name]: "" }));
  };

  return (
    <>
        <Grid
          container
          margin="0 auto"
          spacing={2}
        >
          <Grid size={{ xs: 12, sm: 2, md: 2 }}>
            <FormControl fullWidth>
              <InputLabel id="title">Title</InputLabel>
              <Select
                labelId="title"
                name="title"
                value={select.title}
                label="Title"
                onChange={handleChange}
                fullWidth
                error={!!error.title}
              >
                <MenuItem value="miss">Miss</MenuItem>
                <MenuItem value="mrs">Mrs</MenuItem>
                <MenuItem value="ms">Ms</MenuItem>
                <MenuItem value="mr">Mr</MenuItem>
              </Select>
              <Typography variant="caption" color="error">
                {error.title}
              </Typography>
            </FormControl>
          </Grid>
          <Grid size={{ xs: 12, sm: 5, md: 5 }}>
            <TextField
              name="fname"
              placeholder="Enter Your First Name"
              variant="outlined"
              size="medium"
              value={select.fname}
              onChange={handleChange}
              label="First Name "
              fullWidth
              error={!!error.fname}
              helperText={error.fname}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 5, md: 5 }}>
            <TextField
              name="lname"
              placeholder="Enter Your Last Name"
              variant="outlined"
              size="medium"
              value={select.lname}
              onChange={handleChange}
              label="Last Name"
              fullWidth
              error={!!error.lname}
              helperText={error.lname}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 12 }}>
            <TextField
              name="email"
              placeholder="Enter Your Email"
              variant="outlined"
              size="medium"
              value={select.email}
              onChange={(e) => handleChange(e)}
              label="Your Email"
              fullWidth
              error={!!error.email}
              helperText={error.email}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 12 }}>
            <TextField
              name="phone"
              placeholder="Enter Your Phone Number"
              variant="outlined"
              size="medium"
              value={select.phone}
              onChange={(e) => handleChange(e)}
              label="Your Mobile "
              fullWidth
              error={!!error.phone}
              helperText={error.phone}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 12 }}>
            <FormControl fullWidth>
              <InputLabel id="occupation">Occupation</InputLabel>
              <Select
                labelId="occupation"
                name="occupation"
                value={select.occupation}
                label="Occupation"
                onChange={handleChange}
                fullWidth
                error={!!error.occupation}
              >
                <MenuItem value="student">Student</MenuItem>
                <MenuItem value="teacher">Teacher</MenuItem>
                <MenuItem value="engineer">Engineer</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
              <Typography variant="caption" color="error">
                {error.occupation}
              </Typography>
            </FormControl>
          </Grid>
          {select.occupation === "other" && (
            <Grid size={{ xs: 12, sm: 12, md: 12 }}>
              <TextField
                name="otherOccupation"
                placeholder="Enter Your Occupation"
                variant="outlined"
                size="medium"
                value={select.otherOccupation}
                onChange={(e) => handleChange(e)}
                label="Your Occupation"
                fullWidth
                error={!!error.otherOccupation}
                helperText={error.otherOccupation}
              />
            </Grid>
          )}
          <Grid size={{ xs: 12, sm: 12, md: 12 }}>
            <FormControl fullWidth>
              <InputLabel id="enquiry-type">Enquiry Type</InputLabel>
              <Select
                labelId="enquiry-type"
                name="enquiryType"
                value={select.enquiryType}
                label="Enquiry Type"
                onChange={handleChange}
                fullWidth
                error={!!error.enquiryType}
              >
                <MenuItem value="buy">Buy</MenuItem>
                <MenuItem value="rent">Rent</MenuItem>
                <MenuItem value="complain">Complain</MenuItem>
                <MenuItem value="suggestion">Suggestion</MenuItem>
              </Select>
              <Typography variant="caption" color="error">
                {error.enquiryType}
              </Typography>
            </FormControl>
          </Grid>

          <Grid size={{ xs: 12, sm: 12, md: 12 }}>
            <TextField
              name="enquiryDetails"
              placeholder="Enter your details of inquiry here"
              variant="outlined"
              size="medium"
              value={select.enquiryDetails}
              onChange={(e) => handleChange(e)}
              label="Enquiry Details"
              multiline
              rows={4}
              fullWidth
              error={!!error.enquiryDetails}
              helperText={error.enquiryDetails}
            />
          </Grid>
          {/* <Grid size={{ xs: 12, sm: 12, md: 12 }}>
            <Button
              onClick={handleChange}
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
              Submit Enquiry
            </Button>
          </Grid> */}
        </Grid>
    </>
  );
}
