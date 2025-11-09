import React from "react";
import { Container } from "@mui/material";
import Property from "../component/Property";

export default async function page({ params }: any) {
  const id = await params.id;

  return (
    <Container maxWidth="xl"  sx={{ bgcolor: "white",}}>
      <Property id={id} />
    </Container>
  );
}

/* <div style={{ padding: '2rem' }}>
<h1>{property.rentType}</h1>
<div style={{ display: 'flex', gap: '2rem', marginTop: '2rem' }}>
  <div style={{ flex: 1 }}>
    <img 
      src={property.src} 
      alt={property.alt} 
      style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
    />
  </div>
  <div style={{ flex: 1 }}>
    <h2>{property.price}</h2>
    <p>
      <LocationOnIcon /> {property.location}
    </p>
    <div style={{ marginTop: '1rem' }}>
      <p>Type: {property.type}</p>
      <p>Size: {property.size}</p>
      <p>Style: {property.style}</p>
      <p>Bathrooms: {property.quantity}</p>
    </div>
    <button 
      style={{
        marginTop: '2rem',
        padding: '0.5rem 1rem',
        backgroundColor: '#00B98E',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
      }}
    >
      Book Now
    </button>
  </div>
</div>
</div> */
