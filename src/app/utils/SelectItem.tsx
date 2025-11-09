export const property = [
  { id: 1, label: "Property Type", value: "Property Type" },
  { id: 2, label: "1 RK", value: "rk" },
  { id: 3, label: "1 BHK", value: "onebhk" },
  { id: 4, label: "2 BHK", value: "twobhk" },
  { id: 5, label: "Girls PG", value: "girlsPg" },
  { id: 6, label: "Boys PG", value: "boysPg" },
  { id: 7, label: "Unisex PG", value: "unisexPg" },
];

export const propertyOptions: any = {
  property: {
    select: [{ label: "Select", value: "select" }],
    selecttwo: [{ label: "Select", value: "" }],
  },

  rk: {
    type: [
      { label: "Type", value: "Type" },
      { label: "Luxury", value: "luxury" },
      { label: "Non-Luxury", value: "non-luxury" },
    ],
    furnishing: [
      { label: "Furnishing", value: "Furnishing" },
      { label: "Furnished", value: "furnished" },
      { label: "Semi-Furnished", value: "semi-furnished" },
      { label: "Unfurnished", value: "unfurnished" },
    ],
  },
  onebhk: {
    type: [
      { label: "Type", value: "" },
      { label: "Luxury", value: "luxury" },
      { label: "Non-Luxury", value: "non-luxury" },
    ],
    furnishing: [
      { label: "furnishing", value: "" },
      { label: "Furnished", value: "furnished" },
      { label: "Semi-Furnished", value: "semi-furnished" },
      { label: "Unfurnished", value: "unfurnished" },
    ],
  },
  twobhk: {
    type: [
      { label: "Type", value: "" },
      { label: "Luxury", value: "luxury" },
      { label: "Non-Luxury", value: "non-luxury" },
    ],
    furnishing: [
      { label: "Furnishing", value: "" },
      { label: "Furnished", value: "furnished" },
      { label: "Semi-Furnished", value: "semi-furnished" },
      { label: "Unfurnished", value: "unfurnished" },
    ],
  },
  boysPg: {
    food: [
      { label: "Food", value: "" },
      { label: "With Food", value: "with food" },
      { label: "Without Food", value: "without food" },
    ],
    sharing: [
      { label: "Sharing", value: "" },
      { label: "Single", value: "single" },
      { label: "Double", value: "double" },
      { label: "Triple", value: "triple" },
    ],
  },
  girlsPg: {
    food: [
      { label: "Food", value: "" },
      { label: "With Food", value: "with food" },
      { label: "Without Food", value: "without food" },
    ],
    sharing: [
      { label: "Sharing", value: "" },
      { label: "Single", value: "single" },
      { label: "Double", value: "double" },
      { label: "Triple", value: "triple" },
    ],
  },
  unisexPg: {
    food: [
      { label: "Food", value: "" },
      { label: "With Food", value: "with food" },
      { label: "WithOut Food", value: "without food" },
    ],
    sharing: [
      { label: "Sharing", value: "" },
      { label: "Single", value: "single" },
      { label: "Double", value: "double" },
      { label: "Triple", value: "triple" },
    ],
  },
};

export const location = [
  { id: 1, name: "Location" },
  { id: 2, name: "Noida" },
  { id: 3, name: "Delhi" },
  { id: 4, name: "Gurgaon" },
  { id: 4, name: "Other" },
];

export const locationOption: any = {
  Noida: [
    "Sector",
    "Sector 63",
    "Sector 62",
    "Sector 61",
    "Sector 59",
    "Sector 108",
    "Sector 72",
    "Sector 22",
    "Sector 104",
    "Sector 97",
    "Sector 163",
    "Sector 3",
  ],
  Delhi: [
    "Dwarka",
    "Janakpuri",
    "Rohini",
    "Pitampura",
    "Lajpat Nagar",
    "Kalkaji",
    "Mayur Vihar",
    "Saket",
    "Karol Bagh",
    "Connaught Place",
  ],
  Gurgaon: [
    "Sector 14",
    "Sector 56",
    "Sector 43",
    "Sector 23",
    "Sector 29",
    "Sector 47",
    "Sector 48",
    "Sector 49",
    "Sector 50",
  ],
};

export const propert = [
  { id: 1, name: "Property Type" },
  { id: 2, name: "1 RK" },
  { id: 3, name: "1 BHK" },
  { id: 4, name: "2 BHK" },
  { id: 5, name: "Girls PG" },
  { id: 6, name: "Boys PG" },
  { id: 7, name: "Unisex PG" },
];

export const propertOption:any = {
  rk: {
    type: ["Type", "Luxury", "Non-Luxury"],
    furnishing: ["Furnishing", "Furnished", "Semi-Furnished","Unfurnished"],
  },
  onebhk: {
    type: ["Type", "Luxury", "Non-Luxury"],
    furnishing: ["Furnishing", "Furnished", "Semi-Furnished","Unfurnished"],
  },
  twobhk: {
    type: ["Type", "Luxury", "Non-Luxury"],
    furnishing: ["Furnishing", "Furnished", "Semi-Furnished","Unfurnished"],
  },
  boyspg:{
    food:["Food","With Food","Without Food"],
    sharing:["Sharing","Single","Double","Triple"],
  },
  girlspg:{
    food:["Food","With Food","Without Food"],
    sharing:["Sharing","Single","Double","Triple"],
  },
  unisexpg:{
    food:["Food","With Food","Without Food"],
    sharing:["Sharing","Single","Double","Triple"],
  }
};
