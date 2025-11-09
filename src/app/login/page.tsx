"use client";
import React, { useState } from 'react';
import { TextField, Button, Tabs, Tab, Box, Typography, Fade } from '@mui/material';

export default function Login() {
  const [tab, setTab] = useState(0);

  // Email OTP States
  const [email, setEmail] = useState('');
  const [emailOtp, setEmailOtp] = useState('');
  const [isEmailOtpSent, setIsEmailOtpSent] = useState(false);

  // Mobile OTP States
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);

  // Custom Alert State
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  interface ShowCenteredAlertProps {
    message: string;
  }

  const showCenteredAlert = (message: ShowCenteredAlertProps['message']): void => {
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 2500);
  };

  const handleSendEmailOtp = () => {
    if (!email || !email.includes('@')) return showCenteredAlert('Enter a valid email');
    setIsEmailOtpSent(true);
    showCenteredAlert('OTP sent to email (simulated)');
  };

  const handleEmailOtpLogin = () => {
    if (!emailOtp) return showCenteredAlert('Enter the OTP sent to your email');
    showCenteredAlert(`Logged in with Email: ${email}`);
  };

  const handleSendOtp = () => {
    if (!mobile.match(/^\d{10}$/)) return showCenteredAlert('Enter valid 10-digit mobile number');
    setIsOtpSent(true);
    showCenteredAlert('OTP sent to mobile (simulated)');
  };

  const handleOtpLogin = () => {
    if (!otp) return showCenteredAlert('Enter the OTP');
    showCenteredAlert(`Logged in with Mobile: ${mobile}`);
  };

  return (
    <>
      {/* Centered Custom Alert */}
      {showAlert && (
        <Fade in={showAlert}>
          <Box sx={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'rgba(53, 49, 49, 0.85)',
            color: 'white',
            px: 3,
            py: 2,
            borderRadius: 2,
            zIndex: 9999,
            textAlign: 'center',
            minWidth: 250
          }}>
            {alertMessage}
          </Box>
        </Fade>
      )}

      {/* Login Box */}
      <Box sx={{ maxWidth: 400, mx: 'auto', mt: 1, p: 3, boxShadow: 3, borderRadius: 2 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Login
        </Typography>

        <Tabs value={tab} onChange={handleTabChange} variant="fullWidth">
          <Tab label="Email OTP" />
          <Tab label="Mobile OTP" />
        </Tabs>

        {tab === 0 && (
          <Box mt={2}>
            <TextField
              label="Email"
              type="email"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {isEmailOtpSent && (
              <TextField
                label="Enter OTP"
                type="text"
                fullWidth
                margin="normal"
                value={emailOtp}
                onChange={(e) => setEmailOtp(e.target.value)}
              />
            )}
            {!isEmailOtpSent ? (
              <Button variant="contained" fullWidth onClick={handleSendEmailOtp} sx={{ color: "white", bgcolor: "#00B98E" }}>
                Send OTP
              </Button>
            ) : (
              <Button variant="contained" fullWidth onClick={handleEmailOtpLogin} sx={{ color: "white", bgcolor: "#00B98E" }}>
                Verify & Login
              </Button>
            )}
          </Box>
        )}

        {tab === 1 && (
          <Box mt={2}>
            <TextField
              label="Mobile Number"
              type="tel"
              fullWidth
              margin="normal"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
            {isOtpSent && (
              <TextField
                label="Enter OTP"
                type="text"
                fullWidth
                margin="normal"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            )}
            {!isOtpSent ? (
              <Button variant="contained" fullWidth onClick={handleSendOtp} sx={{ color: "white", bgcolor: "#00B98E" }}>
                Send OTP
              </Button>
            ) : (
              <Button variant="contained" fullWidth onClick={handleOtpLogin} sx={{ color: "white", bgcolor: "#00B98E" }}>
                Verify & Login
              </Button>
            )}
          </Box>
        )}
      </Box>
    </>
  );
}
