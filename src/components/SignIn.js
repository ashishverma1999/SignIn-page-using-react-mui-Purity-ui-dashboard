import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Link,
  Switch,
  FormControlLabel,
  FormGroup,
  AppBar,
  Toolbar,
} from "@mui/material";
import React from "react";
import Chakra from "./images/Image.jpg";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import PersonIcon from "@mui/icons-material/Person";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import SensorOccupiedIcon from "@mui/icons-material/SensorOccupied";

const SignIn = () => {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={1}>
        <AppBar
          sx={{
            width: "60vw",
            height: "50px",
            marginRight: "250px",
            borderRadius: "10px",
            bgcolor: "#FFFFFF",
            textAlign: "center",
            marginTop: "10px",
            justifyContent: "center",
            fontFamily: "sans-serif",
          }}
        >
          <Toolbar sx={{ fontSize: "15px" }}>
            <Typography sx={{ color: "black" }}>Purity UI Dashboard</Typography>

            <Link
              sx={{
                color: "black",
                marginLeft: "50px",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              <GridViewRoundedIcon sx={{ fontSize: "14px" }} />
              Dashboard
            </Link>
            <Link
              sx={{
                color: "black",
                marginLeft: "15px",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              <PersonIcon sx={{ fontSize: "15px" }} />
              Profile
            </Link>
            <Link
              sx={{
                color: "black",
                marginLeft: "15px",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              <VpnKeyIcon sx={{ fontSize: "12px" }} />
              SignIn
            </Link>
            <Link
              sx={{
                color: "black",
                marginLeft: "15px",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              <SensorOccupiedIcon sx={{ fontSize: "13px" }} />
              SignUp
            </Link>
            <Button
              sx={{
                background: "#313860",
                marginLeft: "70px",
                marginTop: "10px",
                height: "25px",
                borderRadius: "50px",
                color: "white",
                marginBottom: "10px",
              }}
            >
              Free Download
            </Button>
          </Toolbar>
        </AppBar>

        <Grid item xs={6}>
          <Box
            sx={{
              marginTop: "50px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "100px",
              height: "20vh",
              marginLeft: "120px",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: "#5CE1CA",
                fontWeight: "bold",
                fontFamily: "sans-serif",
              }}
            >
              Welcome Back
            </Typography>
            <Typography sx={{ opacity: "0.7", fontSize: "13px" }}>
              Enter your email and password to signin
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <Typography>Email</Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                placeholder="Your email address"
                name="username"
                InputProps={{
                  style: {
                    color: "",
                    borderRadius: "10px",
                    height: "30px",
                  },
                }}
              />
              <Typography>Password</Typography>

              <TextField
                required
                fullWidth
                margin="normal"
                name="password"
                placeholder="Your password"
                InputProps={{
                  style: {
                    color: "",
                    borderRadius: "10px",
                    height: "30px",
                  },
                }}
              />
              <FormGroup>
                <FormControlLabel control={<Switch />} label="Remember me" />
              </FormGroup>
              <Button
                fullWidth
                variant="contained"
                sx={{
                  backgroundColor: "#5CE1CA",
                  borderRadius: "10px",
                  height: "30px",
                }}
              >
                Sign In
              </Button>
              <Typography sx={{ opacity: "0.7" }}>
                Don't have an account?{" "}
                <Link
                  sx={{
                    textDecoration: "none",
                    fontFamily: "sans-serif",
                    color: "#5CE1CA",
                    cursor: "pointer",
                  }}
                >
                  Sign up
                </Link>
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Container maxWidth="sm">
            <Box
              sx={{
                backgroundImage: `url(${Chakra})`,
                height: "80vh",
                backgroundSize: "cover",
                marginRight: "-9%",
                borderEndStartRadius: "10px",
              }}
            ></Box>
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SignIn;
