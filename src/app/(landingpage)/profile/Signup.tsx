"use client"
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { GoogleIcon } from "@/app/component/CustomIcon";
import Link from "next/link";
import { LoadCanvasTemplate, loadCaptchaEnginge, validateCaptcha } from "react-simple-captcha"
import axios from "axios";

interface TYPE{
  setlogin?:any
}
export default function Signup({setlogin}:TYPE) {

  interface ErrorState {
    name: string;
    email: string;
    phone: string;
    captcha: string;
  }

  const[select,setSelect]=useState({name:"",email:"",phone:""})
  const [error, setError] = useState<ErrorState>({ name: "", email: "", phone: "", captcha:""});
  const [captcha, setCaptcha] = useState<string>("")
  const [isFormValid, setIsFormValid] = useState(false)

  const handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
    const{name,value}=e.target;
    setSelect((prev)=>({...prev,[name]:value} ))
    // Removed unused variable 'newError'
    setError((prev)=>({...prev,[name]:""}))
  }
  const handleCaptcha = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCaptcha(e.target.value);
    setError((prev) => ({ ...prev, captcha: "" }));
  }
  const validateCaptchaInput = () => {
    if (validateCaptcha(captcha)) {
      setIsFormValid(true);
      setError((prev) => ({ ...prev, captcha: "" }));
    } else {
      setIsFormValid(false);
      setError((prev) => ({ ...prev, captcha: "Invalid Captcha" }));
    }
  };
  const Validate = ()=>{
    const newError: Partial<ErrorState> = {};
    let isValid=true;
    if(!select.name){
      console.log(select.name);
      newError.name="Name can't be empty";
      isValid=false;
    }
    else if(!/^[a-zA-Z ]{3,30}$/.test(select.name)){
    newError.name="Enter the correct name";
    isValid=false;
    }
    if (!select.email) {
      newError.email = "Email is Required";
      isValid = false;
    }
    else if(!/[a-z0-9\._%+!$&*=^|~#%'`?{}/\-]+@([a-z0-9\-]+\.){1,}([a-z]{2,16})/.test(select.email)){
      newError.email = "Enter the correct email";
      isValid = false;
      }

      if (!select.phone) {
        newError.phone = "Phone is Required";
        isValid = false;
      }
      else if (!/^\d{10}$/.test(select.phone)) {
        newError.phone = "Enter the correct phone number";
        isValid = false;
      }
      if(!isFormValid){
        newError.captcha= "Invalid Captcha"
        isValid = false
      }
    setError(newError as ErrorState);
    return isValid; 
  }
  const submitForm=(e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    if(Validate()){
      try {
        axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/web-user/create`, select)
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error("Error:", error.message);
        } else {
          console.error("Unexpected error:", error);
        }
      }
      setSelect({
        name: "",
        email: "",
        phone: "",
      })
      setError({
        name: "",
        email: "",
        phone: "",
        captcha:""
      })
      console.log(error);
    }
  }

  useEffect(() => {
    loadCaptchaEnginge(6, 'green')
  }, [])

  return (
    <Container >
      <form onSubmit={submitForm}>
      <Grid
        container
        sx={{
          boxShadow: "0 0 10px rgba(0, 0, 0, .08)",
          borderRadius: "10px",
          margin: "auto",
          bgcolor:"white"
        }}
      >
        <Grid size={{ xs: 12, md: 12 }}>
          <Typography
            sx={{
              textAlign: "center",
              padding: "20px",
              fontSize: { xs: 28, md: 35 },
              fontWeight: "bold",
            }}
          >
            Sign Up
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "20px",
            }}
          >
            <TextField
              label="Full Name"
              size="small"
              name="name"
              value={select.name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => { handleChange(e) }}
              error={!!error.name}
              helperText={error.name}
              //   fullWidth
              InputProps={{
                sx: { width:"300px" },
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "20px",
            }}
          >
            <TextField
              label="E-mail"
              size="small"
              name="email"
              type="email"
              value={select.email}
              error={!!error.email}
              helperText={error.email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => { handleChange(e) }}

              //   fullWidth
              InputProps={{
                sx: { width: "300px" },
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "20px",
            }}
          >
            <TextField
              label="Mobile"
              size="small"
              name="phone"
              type="number"
              value={select.phone}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => { handleChange(e) }}
              error={!!error.phone}
              helperText={error.phone}  
              //   fullWidth
              InputProps={{
                sx: { width: "300px" },
              }}
            />
          </Box>
          {!isFormValid && <Box sx={{
              display: "flex",
              paddingInline:"50px",
              marginBottom: "20px",
              justifyContent:"center", 
              alignContent:'center',
              flexDirection:"column"
            }}>
              <Box sx={{alignSelf:'center'}}>
                <LoadCanvasTemplate/>
              </Box>
              <TextField type="text" id="captcha_input" name="captcha" value={captcha} size="small" onChange={handleCaptcha} sx={{mb:'10px'}}/>
              <Button size="small" variant="outlined" type="button" value="Validate" onClick={validateCaptchaInput}>Validate</Button>
            </Box>}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "20px",
             
            }}
          >
            <Button type="submit" variant="contained"sx={{ width:"75%",bgcolor:"#00B98E",color:"white",fontWeight:"bold"}}>Sign Up</Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "20px",
            }}
          >
            <Typography sx={{ color: "gray" }}>
              Already have an account?
              <Link href="" legacyBehavior>
                <a onClick={(e) => { 
                  e.preventDefault();
                  setlogin(true)
                }}>
                  <span style={{ color: "#00B98E", fontWeight: "bold", padding: "3px" }}>Log in</span>
                </a>
              </Link>
            </Typography>
          </Box>
          <Divider variant="middle" sx={{marginBottom:"20px"}}>or</Divider>
          <Box sx={{marginBottom:"20px",display: "flex",justifyContent: "center",}}>
          <Button variant="outlined"   onClick={() => alert('Sign in')} sx={{ width:"90%",color:"black",border:"2px solid gray",display:"flex",justifyContent: "center",alignItems:"center",gap:"8px"}}><GoogleIcon/>Sign Up with Google</Button>
          </Box>
        </Grid>
      </Grid>
      </form>
    </Container>
  );
}
