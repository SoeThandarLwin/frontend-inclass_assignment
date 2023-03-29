import React from "react";
import { Box, Typography, ImageList, ImageListItem, Grid } from "@mui/material";

const Rightbar = () => {
  const imageList = [
    {
      img: `https://source.unsplash.com/random?w=125&h=125&fit=crop&auto=format&sig=${Math.floor(Math.random() * 10)}`,
      title: "Image 1",
    },
    {
      img: `https://source.unsplash.com/random?w=125&h=125&fit=crop&auto=format&sig=${Math.floor(Math.random() * 10)}`,
      title: "Image 2",
    },
    {
      img: `https://source.unsplash.com/random?w=125&h=125&fit=crop&auto=format&sig=${Math.floor(Math.random() * 10)}`,
      title: "Image 3",
    },
    {
      img: `https://source.unsplash.com/random?w=125&h=125&fit=crop&auto=format&sig=${Math.floor(Math.random() * 10)}`,
      title: "Image 4",
    },
  ];

  return (
    <Box sx={{ display: { xs: 'none', md: 'block' }, padding: '0 1em' }}>
      <Typography variant="h6">Latest Photos</Typography>
      <Box>
        <ImageList cols={2} rowHeight={125} sx={{ width: 250, height: 255 }}>
          {imageList.map((item) => (
            <ImageListItem key={item.title}>
              <img src={item.img} alt={item.title} loading="lazy" />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Box>
  );
};

export default Rightbar;
