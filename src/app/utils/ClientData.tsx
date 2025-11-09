import { Rating } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import { JSX } from "react";

interface ClientData {
  src:string;
  alt:string;
  name:string;
  description:string;
  rating: JSX.Element;

}
export const clientData: ClientData[] = [
    {
      src: "/client1.jpg",
      alt: "client1",
      name: "JAZIYA",
      rating: <Rating
      value={3.5}
      readOnly
      precision={0.5}
      emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
    />,
      description:
        " I had a wonderful experience staying at this PG. The rooms were clean and spacious, and the staff was very friendly and helpful. The location was also very convenient, with easy access to public transportation and amenities. I would definitely recommend this PG to anyone looking for a comfortable and affordable place to stay.",
    },
    {
      src: "/client2.jpg",
      alt: "client2",
      name: "FARZIYA",
      rating:<Rating
      value={4.5}
      readOnly
      precision={0.5}
      emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}/>,
      description:
        "I had a wonderful experience staying at this PG. The rooms were clean and spacious, and the staff was very friendly and helpful. The location was also very convenient, with easy access to public transportation and amenities. I would definitely recommend this PG to anyone looking for a comfortable and affordable place to stay.",
    },
    {
      src: "/client3.jpg",
      alt: "client3",
      name: "DANZI",
      rating: <Rating
      value={5}
      readOnly
      precision={0.5}
      emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}/>,
      description:
        "I had a wonderful experience staying at this PG. The rooms were clean and spacious, and the staff was very friendly and helpful. The location was also very convenient, with easy access to public transportation and amenities. I would definitely recommend this PG to anyone looking for a comfortable and affordable place to stay.",
    },
    {
      src: "/client4.jpg",
      alt: "client4",
      name: "MENK",
      rating:<Rating
      value={3.5}
      readOnly
      precision={0.5}
      emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}/>,
      description:
        "I had a wonderful experience staying at this PG. The rooms were clean and spacious, and the staff was very friendly and helpful. The location was also very convenient, with easy access to public transportation and amenities. I would definitely recommend this PG to anyone looking for a comfortable and affordable place to stay.",
    },
    // {
    //   src: "/client4.jpg",
    //   alt: "client4",
    //   name: "MENK",
    //   rating: <Rating
    //   value={4.5}
    //   readOnly
    //   precision={0.5}
    //   emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}/>,
    //   description:
    //     "I had a wonderful experience staying at this PG. The rooms were clean and spacious, and the staff was very friendly and helpful. The location was also very convenient, with easy access to public transportation and amenities. I would definitely recommend this PG to anyone looking for a comfortable and affordable place to stay.",
    // },
    // {
    //   src: "/client4.jpg",
    //   alt: "client4",
    //   name: "MENK",
    //   rating:<Rating
    //   value={3.5}
    //   readOnly
    //   precision={0.5}
    //   emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}/>,
    //   description:
    //     "I had a wonderful experience staying at this PG. The rooms were clean and spacious, and the staff was very friendly and helpful. The location was also very convenient, with easy access to public transportation and amenities. I would definitely recommend this PG to anyone looking for a comfortable and affordable place to stay.",
    // },
  ];
  