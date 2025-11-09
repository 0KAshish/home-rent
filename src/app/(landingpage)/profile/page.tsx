"use client"
import React from "react";
import Signup from "./Signup";

export default function Profile() {
  return (
    // <Container maxWidth="xl" sx={{ bgcolor: "white" ,  }}>
    //   <Grid container spacing={2}>
    //     <Grid size={{ xs: 12, md: 12 }}>
    //       {/* <Image src={"/client2.jpg"} alt='img' height={40} width={40} style={{borderRadius:"50%"}} /> */}
    //       <Box
    //         sx={{
    //           //   height: "700px",
    //           //   width: "1500px",
    //           border: "1px solid gray",
    //           borderRadius: "7px",
    //           //   display:"flex",
    //           padding: {xs:"30px 20px",md:"40px 30px"},
    //           marginBottom:"20px"
    //         }}
    //       >
    //         <Paper
    //           component="form"
    //           sx={{
    //             p: "2px 4px",
    //             display: "flex",
    //             alignItems: "center",
    //             width:{xs:280,md:300},
    //             boxShadow:"0 0 5px gray",
    //             borderRadius: "10px",
    //             marginBottom: "20px",
    //           }}
    //         >
    //           <IconButton sx={{ p: "10px" }} aria-label="menu">
    //             <SearchIcon />
    //           </IconButton>
    //           <InputBase
    //             sx={{ ml: 1, flex: 1 }}
    //             placeholder="Search..."
    //           />
    //           <IconButton
    //             type="button"
    //             sx={{ p: "10px" }}
    //             aria-label="search"
    //           ></IconButton>
    //         </Paper>
    //         <Typography sx={{ fontWeight: "bold", fontSize: "25px",margin: "6px",color:"#00B98E" }}>
    //           Profile Information
    //         </Typography>
    //         <Grid size={{xs:12,md:6}}  sx={{ display:"flex",flexDirection:{xs:"column",md:"row"},alignItems:{xs:"flex-start"}}}>
    //           <Button onClick={()=>setSelectedTab("BasicProfile")} sx={{margin: "2px",fontSize: "14px",fontWeight:"bold",color: "black","&:hover":{color:"#00B98E",cursor:"pointer"}}}>
    //             Basic Profile
    //           </Button>
    //           <Button   onClick={()=>setSelectedTab("ShortListed")} sx={{ margin: "2px",fontSize: "14px",fontWeight:"bold", color: "black", "&:hover":{color:"#00B98E",cursor:"pointer"} }}>
    //             Your Shortlists
    //           </Button>
    //           <Button  onClick={()=>setSelectedTab("ContactedProperties")} sx={{ margin: "2px",fontSize: "14px",fontWeight:"bold", color: "black" ,"&:hover":{color:"#00B98E",cursor:"pointer"} }}>
    //             Owners you Contacted
    //           </Button>
    //         </Grid>

    //         {selectedTab==="BasicProfile" &&<BasicProfile/>}
    //         {selectedTab==="ShortListed" &&<ShortListed/>}
    //         {selectedTab==="ContactedProperties" &&<ContactedProperties/>}

    //         {/*  */}
            
            
    //          {/* <ContactedProperties/> */}
    //         {/* <Box
    //           sx={{
    //             height: "0 auto",
    //             width: "100%",
    //             border: "1px solid gray",
    //             borderRadius: "10px",
    //             overflow: "hidden",
    //             position: "relative",
    //             marginBottom:"20px"
    //           }}
    //         >
             
              
    //         </Box> */}

    //         <Grid size={{ xs: 12, md: 12 }} >
    //           {/* <Box
    //             sx={{
    //               height: "200px",
    //               width: "900",
    //               border: "1px solid gray",
    //               borderRadius: "10px",
    //               padding: "10px 30px",
                 
    //             }}
    //           > */}
    //             <TextareaAutosize
    //               aria-label="minimum height"
    //               minRows={5}
    //               placeholder="    What you are thinking...."
    //               style={{ width: "100%", borderRadius: "10px" ,padding:"10px 10px"}}
    //             />
    //           {/* </Box> */}
    //         </Grid>
    //       </Box>
    //     </Grid>
    //   </Grid>
    // </Container>
    // <BrandingSignInPage/>
    <Signup />
    // <Signin/>
  );
}
