"use client";
import EmailIcon from '@mui/icons-material/Email';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Box,
  Button,
  Checkbox,
  TextField,
  Typography,
} from "@mui/material";
import React, { ChangeEvent } from "react";
import { useState } from "react";

export default function Signin() {

   interface ErrorType {
    email?:string;
    password?: string;
    [key:string]:string|undefined
  }
  
  const [checked, setChecked] = React.useState(true);
  const [selected, setSelected] = useState({ email: "", password: "" });
  const [error, setError] = useState<ErrorType>({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  const handleChanges= (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setSelected((prev) => ({ ...prev, [name]: value }));
    setError((prev) => ({ ...prev, [name]: "" }));
  };
 
  const Validate = () => {
    const newError: ErrorType = {};
    let isValid = true;
    if (!selected.email) {
      newError.email = "Email is Required";
      isValid = false;
    }
    else if(!/[a-z0-9\._%+!$&*=^|~#%'`?{}/\-]+@([a-z0-9\-]+\.){1,}([a-z]{2,16})/.test(selected.email)){
      newError.email = "Enter the correct email";
      isValid = false;
      }
      if(!selected.password){
        newError.password="Password is Required"
        isValid=false;
      }
      else if( /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/.test(selected.password)){
        newError.password="Set the correct password"
      }
    setError(newError);
    return isValid;
  };

  const checkPassword=()=>{
    setShowPassword(!showPassword);
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Validate()) {
      alert("formsubmit successfully");
      setSelected({
        email: "",
        password: "",
      });
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          maxWidth: "400px",
          width: "100%",
          //   border: "1px solid gray",
          //   boxShadow: "0 0 5px gray",
          boxShadow: "0 0 10px rgba(0, 0, 0, .08)",
          borderRadius: "10px",
          margin: "auto",
          marginBottom: "20px",
          bgcolor: "white",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            padding: "20px",
            fontSize: { xs: 28, md: 35 },
            fontWeight: "bold",
          }}
        >
          Sign In
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "20px",
            position:"relative"
          }}
        >
          <TextField
            label="Email"
            size="small"
            name="email"
            type="email"
            value={selected.email}
            onChange={(e) => handleChanges(e)}
            error={!!error.email}
            helperText={error.email}
            InputProps={{
              sx: { width: "300px",paddingRight:"30px" },
            }}
          />
          <Box sx={{position:"absolute",right:60,top:6}}>
            <EmailIcon/>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "20px",
            position:"relative"
          }}
        >
          <TextField
            label="Password"
            size="small"
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={selected.password}
            onChange={(e) => handleChanges(e)}
            error={!!error.password}
            helperText={error.password}
            //   fullWidth
            InputProps={{
              sx: { width: "300px",paddingRight:"30px" },
            }}
          />
          <Button onClick={checkPassword}  sx={{position:"absolute",right:40,top:3,color:"black"}}>
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </Button>
        </Box>
        <Box sx={{ display: "flex", paddingLeft: "40px", alignItems: "center", }}>
          <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />{" "}
          <Typography>Remember Me</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          <Button
            variant="contained"
            type="submit"
            sx={{
              width: "75%",
              bgcolor: "#00B98E",
              color: "white",
              fontWeight: "bold",
              marginBottom: "60px",
            }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </form>
  );
}
