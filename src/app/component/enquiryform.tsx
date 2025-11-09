import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import React, { ChangeEvent, FormEvent } from "react";

export default function Enquiryform() {
  interface UserData {
    title?:string;
    fname?:string;
    lname?:string;
    email?:string;
    occupation?:string;
    otherOccupation?:string;
    enquiryType?:string;
    enquiryDetails?:string;
  }
  const [select, setSelect] = React.useState<UserData>({
    title: "",
    fname: "",
    lname: "",
    email: "",
    occupation: "",
    otherOccupation: "",
    enquiryType: "",
    enquiryDetails: "",
  });
  const [error, setError]= React.useState<UserData>({
    title: "",
    fname: "",
    lname: "",
    email: "",
    occupation: "",
    otherOccupation: "",
    enquiryType: "",
    enquiryDetails: "",
  })

  const handleChange = (event:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>| SelectChangeEvent) => {
    const { name, value } = event.target;
    setSelect((prev) => ({ ...prev, [name]: value }));
    setError((prev) => ({ ...prev, [name]: "" }));
  };

  const validate =()=>{
    let isValid = true;
    const newError:UserData = {};
    if(!select.title){
      newError.title = "Title is Required"
      isValid= false
    }
    if(!select.fname){
      newError.fname = "First name is Required"
      isValid= false
    }
    if(!select.lname){
      newError.lname = "Last name is Required"
      isValid= false
    }
    if(!select.email){
      newError.email = "Email is Required"
      isValid= false
    } else if (!/\S+@\S+\.\S+/.test(select.email)) {
      newError.email = "Invalid email format.";
      isValid = false;
    }
    if(!select.occupation){
      newError.occupation = "Occupation is Required"
      isValid= false
    }
    if(select.occupation === "other" && !select.otherOccupation){
      newError.otherOccupation = "Occupation is Required"
      isValid= false
    }
    if(!select.enquiryType){
      newError.enquiryType = "This field is Required"
      isValid= false
    }
    if(!select.enquiryDetails){
      newError.enquiryDetails = "This field is Required"
      isValid= false
    }
    setError(newError)
    return isValid
  }
  const handleSubmit=(e:any)=>{
    e.preventDefault()
    if(validate()){
      alert("Form submitted successfully")
      setSelect({
        title: "",
        fname: "",
        lname: "",
        email: "",
        occupation: "",
        otherOccupation: "",
        enquiryType: "",
        enquiryDetails: "",
      })
    }
  }

  return (
    <Grid container sx={{ backgroundColor: "#EFFDF5", padding: 5 }}>

      <Grid size={{ xs: 12, sm: 10, md: 8 }} margin="0 auto">
        <Typography
          variant="h2"
          fontWeight={700}
          fontSize="calc(1.1rem + 2.1vw)"
          sx={{ color: "#0E2E50", paddingBlock: 2 }}
        >
          Get in Touch with Us
        </Typography>
        <Typography
          variant="body1"
          textAlign={"justify"}
          sx={{ color: "#0E2E50", paddingBottom: 3 }}
        >
          Looking for detailed information about our services or need to share
          your thoughts with us? Fill out this enquiry form to connect! Whether
          it&apos;s feedback, complaints, or questions, we&apos;re here to listen and
          help. Once we receive your submission, our team will thoroughly review
          it and reach out to you promptly—either via email or phone. Your voice
          matters to us!
        </Typography>
      </Grid>
      {/* <form onSubmit={handleSubmit}> */}
      <Grid
        container
        size={{ xs: 12, sm: 10, md: 5 }}
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
            <Typography variant="caption" color="error">{error.title}</Typography>
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
            <Typography variant="caption" color="error">{error.occupation}</Typography>
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
            <Typography variant="caption" color="error">{error.enquiryType}</Typography>
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
            rows={8}
            fullWidth
            error={!!error.enquiryDetails}
            helperText={error.enquiryDetails}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 12 }}>
          <Button
          onClick={handleSubmit}
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
        </Grid>
      </Grid>
      {/* </form> */}
    </Grid>
  );
}
 