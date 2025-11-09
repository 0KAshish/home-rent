import { Box, Grid, Switch, Typography } from '@mui/material'
import React from 'react'

const label = { inputProps: { "aria-label": "Color switch demo" } };
export default function ContactedProperties() {
  return (
    <Grid container sx={{height:"200px",width:"900px",padding:{xs:"20px 10px",md:"30px 40px"}}}>
       <Grid size={{xs:12,md:12}}>
        <Typography sx={{fontSize:{xs:"18px",md:"20px"},fontWeight:"bold"}}>Contacted Properties </Typography>
        <Box sx={{display:"flex",alignItems:"center",marginBottom:"30px"}}>
            <Typography sx={{fontWeight:"bold"}}>Currently Available</Typography>
            <Switch {...label} defaultChecked color="success" />
        </Box>
        <Typography>No owners are contacted yet!</Typography>
       </Grid>
    </Grid>
  )
}
