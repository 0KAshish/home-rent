"use client";

import { Container } from "@mui/material";
import React, { useState } from "react";
import Hero from "../component/hero";
import PropertyTypes from "../component/propertyTypes";
import PropertyList from "../component/propertyList";
import Agent from "../component/Agent";
import Client from "../component/Client";
import About from "../component/aboutus";
import Properties from "../component/Properties";
// import Login from "../login/Login";


export default function Dashboard() {
  const [designation, setDesignation] = useState("");
  const [showOption, setShowOption] = useState(false);
  return (
    <Container maxWidth="xl" sx={{ backgroundColor: "white" }}>
      <Hero />
      <PropertyList />
      <PropertyTypes />
      <About />
      <Properties />
      <Agent />
      <Client />
    </Container>
    
  );
}





