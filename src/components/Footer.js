import React from "react";
import { Typography, Link, Container } from "@mui/material";

const Footer = () => {
  return (
    <Container sx={{ textAlign: "center",marginTop:'45px',marginBottom:'5px' }}>
      <Typography
        sx={{
          fontFamily: "sans-serif",
          opacity: "0.8",
          textAlign: "center",
          paddingTop: "30px",
        }}
      >
        @ 2021, Made with ❤️ by{" "}
        <Link
          sx={{
            textDecoration: "none",
            fontFamily: "sans-serif",
            color: "#5CE1CA",
           
            cursor:'pointer'
            
          }}
        >
          Creative Tim
        </Link>
        &{" "}
        <Link
          sx={{
            textDecoration: "none",
            fontFamily: "sans-serif",
            color: "#5CE1CA",
            cursor:'pointer'
            
          }}
        >
          Simmmple{" "}
        </Link>
        <Link
          sx={{
            textDecoration: "none",
            fontFamily: "sans-serif",
            color: "Gray",
            margin:'20px',
            marginLeft:'20%',
            cursor:'pointer'
          }}
        >
          Creative Tim
        </Link>
        <Link
          sx={{
            textDecoration: "none",
            fontFamily: "sans-serif",
            color: "Gray",
            cursor:'pointer',
            margin:'20px'
          }}
        >
          Simmmple
        </Link>
        <Link
          sx={{
            textDecoration: "none",
            fontFamily: "sans-serif",
            color: "Gray",
            cursor:'pointer',
            margin:'20px'
          }}
        >
          Blog
        </Link>
        <Link
          sx={{
            textDecoration: "none",
            fontFamily: "sans-serif",
            color: "Gray",
            cursor:'pointer',
            margin:'20px'
          }}
        >
          License
        </Link>
      </Typography>
    </Container>
  );
};

export default Footer;
