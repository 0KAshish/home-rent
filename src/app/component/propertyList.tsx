"use client";
import { Button, Grid, MenuItem, TextField } from "@mui/material";
import React, { useState } from "react";
import {
  property,
  location,
  propertyOptions,
  locationOption,
} from "../utils/SelectItem";

export default function PropertyList() {
  const [formData, setFormData] = useState({
    propertyType: "Property Type",
    secondField: "Type",
    thirdField: "",
  });

  const [fieldConfig, setFieldConfig] = useState<any>({
    secondField: { label: "", options: [] },
    thirdField: { label: "", options: [] },
  });

  const handlePropertyChange = (event: any) => {
    const selectedValue = event.target.value;
    console.log("Selected Property Type:", selectedValue);
    // setFormData((prev) => ({
    //   ...prev,
    //   propertyType: selectedValue
    // }));

    setFormData({
      propertyType: selectedValue,
      secondField: "",
      thirdField: "",
    });

    if (
      selectedValue === "rk" ||
      selectedValue === "onebhk" ||
      selectedValue === "twobhk"
    ) {
      setFieldConfig({
        secondField: {
          label: "Type",
          options: propertyOptions[selectedValue].type,
        },
        thirdField: {
          label: "Furnishing",
          options: propertyOptions[selectedValue].furnishing,
        },
      });
    } else if (["girlsPg", "boysPg", "unisexPg"].includes(selectedValue)) {
      setFieldConfig({
        secondField: {
          label: "Food",
          options: propertyOptions[selectedValue].food,
        },
        thirdField: {
          label: "Sharing",
          options: propertyOptions[selectedValue].sharing,
        },
      });
      console.log(setFieldConfig);
    }
    //  else {
    //   setFieldConfig({
    //     secondField: { label: "", options: [] },
    //     thirdField: { label: "", options: [] }
    //   });
    // }
  };

  const handleFieldChange = (fieldName: any) => (event: any) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: event.target.value,
    }));
  };

  const [selectedLocation, setSelectedLocation] = useState("");
  const [availableLocation, setAvailableLocation] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [otherLocation, setOtherLocation] = useState("");

  const handleLocationChange = (e: any) => {
    const address = e.target.value;
    setSelectedLocation(address);
    setAvailableLocation(locationOption[address] || []);
    setSelectedCity("");
    if (address !== "Other") {
      setOtherLocation("");
    }
  };
  const handleCityChange = (e: any) => {
    setSelectedCity(e.target.value);
  };

  const handleOtherLocationChange = (e: any) => {
    setOtherLocation(e.target.value);
  };

  return (
    <Grid
      container
      spacing={1}
      justifyContent="space-between"
      alignItems="center"
      sx={{ bgcolor: "#00B98E", padding: 5, marginBottom: "20px" }}
    >
      <Grid size={{ xs: 12, md: 2 }} sx={{ mb: { xs: 1, md: 0 } }}>
        <TextField
          select
          value={formData.propertyType}
          onChange={handlePropertyChange}
          defaultValue="Property Type"
          sx={{
            width: "100%",
          }}
          InputProps={{
            style: {
              borderRadius: "5px",
              backgroundColor: "white",
              color: "gray",
            },
          }}
        >
          {property.map((option, i) => (
            <MenuItem key={i} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Grid>

      <Grid size={{ xs: 6, md: 2 }} sx={{ mb: { xs: 1, md: 0 } }}>
        <TextField
          select
          // defaultValue={fieldConfig.secondField.label}
          name={fieldConfig.secondField.label}
          // label={fieldConfig.secondField.label}
          value={formData.secondField}
          defaultValue="Type"
          onChange={handleFieldChange("secondField")}
          sx={{
            width: "100%",
          }}
          InputProps={{
            style: {
              borderRadius: "5px",
              backgroundColor: "white",
              color: "gray",
            },
          }}
        >
          {fieldConfig.secondField.options.length > 0 ? (
            fieldConfig.secondField.options.map((type: any, i: number) => (
              <MenuItem key={i} value={type.value}>
                {type.label}
              </MenuItem>
            ))
          ) : (
            <MenuItem disabled value="">
              Select
            </MenuItem>
          )}
        </TextField>
      </Grid>

      <Grid size={{ xs: 6, md: 2 }} sx={{ mb: { xs: 1, md: 0 } }}>
        <TextField
          select
          defaultValue="Select"
          // name="thirdFeild"
          // label={fieldConfig.thirdField.label}
          name={fieldConfig.thirdField.label}
          value={formData.thirdField}
          onChange={handleFieldChange("thirdField")}
          sx={{
            width: "100%",
          }}
          InputProps={{
            style: {
              borderRadius: "5px",
              backgroundColor: "white",
              color: "gray",
            },
          }}
        >
          {fieldConfig.thirdField.options.length > 0 ? (
            fieldConfig.thirdField.options.map((furnish: any, i: number) => (
              <MenuItem key={i} value={furnish.value}>
                {furnish.label}
              </MenuItem>
            ))
          ) : (
            <MenuItem disabled value="">
              Select
            </MenuItem>
          )}
        </TextField>
      </Grid>

      <Grid size={{ xs: 12, md: 2 }} sx={{ mb: { xs: 1, md: 0 } }}>
        <TextField
          sx={{
            width: "100%",
          }}
          InputProps={{
            style: {
              borderRadius: "5px",
              backgroundColor: "white",
              color: "gray",
            },
          }}
          select
          defaultValue="Location"
          onChange={handleLocationChange}
        >
          {location.map((add: any, i: number) => (
            <MenuItem key={i} value={add.name}>
              {add.name}
            </MenuItem>
          ))}
        </TextField>
      </Grid>

      <Grid size={{ xs: 12, md: 2 }} sx={{ mb: { xs: 1, md: 0 } }}>
        {selectedLocation === "Other" ? (
          <TextField
            type="text"
            value={otherLocation}
            onChange={handleOtherLocationChange}
            sx={{
              width: "100%",
            }}
            InputProps={{
              style: {
                borderRadius: "5px",
                backgroundColor: "white",
                color: "gray",
              },
            }}
          ></TextField>
        ) : (
          <TextField
            sx={{
              width: "100%",
            }}
            InputProps={{
              style: {
                borderRadius: "5px",
                backgroundColor: "white",
                color: "gray",
              },
            }}
            select
            onChange={handleCityChange}
            // value={selectedCity}
            defaultValue={
              selectedCity === "Noida"
                ? "Sector"
                : selectedCity === "Delhi"
                  ? "Dwarka"
                  : selectedCity === "Gurgaon"
                    ? "Sector 14"
                    : ""
            }
          >
            {availableLocation.map((name: any, index: any) => (
              <MenuItem key={index} value={name}>
                {name}
              </MenuItem>
            ))}
          </TextField>
        )}
      </Grid>

      <Grid size={{ xs: 12, md: 2 }} sx={{}}>
        <Button
          variant="contained"
          sx={{
            width: "100%",
            MaxWidth: { md: 200 },
            height: "55px",
            bgcolor: "black",
            color: "white",
            textTransform: "capitalize",
            // ml: { md: 10 },
          }}
        >
          Search
        </Button>
      </Grid>
    </Grid>
  );
}
