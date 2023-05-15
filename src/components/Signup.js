import React, { useState } from "react";
import "./signup.css";
import { useNavigate, Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";



const Signup = (props) => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const host = "http://localhost:5000";

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`${host}/api/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
      }),
    });

    const json = await response.json();

    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      navigate("/");
      props.showAlert("create user successfully", "success");
    } else {
      // alert("Invalid credentials");
      props.showAlert("Invalid credentials", "error");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const theme = createTheme({
    
  });

  return (
    <div className="container ">
      <div className="s-heading">
        <h2>Create your account</h2>
      </div>

      <div className="leftright">
        <div className="s-left">
          <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <Box
                sx={{
                  marginTop: 8,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Sign Up
                </Typography>

                <Box component="form" noValidate sx={{ mt: 1 }}>
                  <TextField
                    margin="normal"
                    autoFocus
                    required
                    fullWidth
                    id="name"
                    label="Full Name"
                    autoComplete="name"
                    name="name"
                    type="name"
                    value={credentials.name}
                    onChange={onChange}
                    sx={{
                      "& .MuiInputLabel-root": { color: "white" },
                      "& .MuiOutlinedInput-root": {
                        "& > fieldset": { borderColor: "white" },
                      },
                    }}
                    inputProps={{ style: { color: "white", fontFamily:"cursive" } }}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    autoComplete="email"
                    name="email"
                    type="email"
                    value={credentials.email}
                    onChange={onChange}
                    inputProps={{ style: { color: "white", fontFamily:"cursive" } }}
                    sx={{
                      "& .MuiInputLabel-root": { color: "white" },
                      "& .MuiOutlinedInput-root": {
                        "& > fieldset": { borderColor: "white" },
                      },
                    }}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Password"
                    autoComplete="current-password"
                    id="password"
                    type="password"
                    name="password"
                    value={credentials.password}
                    onChange={onChange}
                    inputProps={{ style: { color: "white", fontFamily:"cursive" } }}
                    sx={{
                      "& .MuiInputLabel-root": { color: "white" },
                      "& .MuiOutlinedInput-root": {
                        "& > fieldset": { borderColor: "white" },
                      },
                    }}
                  />

                  <Button
                    type="submit"
                    onClick={handleSubmit}
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Sign In
                  </Button>

                  <Grid container>
                    <Grid item>
                      <Link to="/login" variant="body2">
                        {"Have an account? Log in now"}
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Container>
          </ThemeProvider>
        </div>

        <div className="orobj">
          <hr width="1" size="50" className="hline" />
          OR
          <hr width="1" size="50" className="hline" />
        </div>

        <div className="s-right">
          <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <Box
                sx={{
                  width: "30rem",
                  height: "30rem",
                  paddingTop: 15,
                  marginTop: 15,
                }}
              >
                <Box
                  className="g-box"
                  noValidate
                  sx={{
                    mt: 1,
                    p: 1.5,
                    border: "1px solid grey",
                    borderRadius: 10,
                    width: "14rem",
                  }}
                >
                  <div>
                    <GoogleIcon fontSize="large" />{" "}
                    <span>Connet with Google</span>
                  </div>
                </Box>
                <Box
                  className="gt-box"
                  sx={{
                    mt: 1,
                    p: 1.5,
                    border: "1px solid grey",
                    borderRadius: 10,
                    width: "14rem",
                  }}
                >
                  <div>
                    <GitHubIcon fontSize="large" />{" "}
                    <span>Connet with Github</span>
                  </div>
                </Box>
              </Box>
            </Container>
          </ThemeProvider>
        </div>
      </div>
    </div>
  );
};

export default Signup;

//         <div className="s-right">
//
//         </div>
//       </div> */}

//       {/* <form onSubmit={handleSubmit}>

//         <div className="mb-3">
//           <label htmlFor="uname" className="form-label">
//             Name
//           </label>

//           <input
//             type="text"
//             className="form-control"
//             id="name"
//             name="name"
//             onChange={onChange}
//             aria-describedby="emailHelp"
//             autoComplete="true"

//             required
//           />
//         </div>

//         <div className="mb-3">
//           <label htmlFor="email" className="form-label">
//             Email ID
//           </label>

//           <input
//             type="email"
//             className="form-control"
//             id="email"
//             name="email"
//             onChange={onChange}
//             aria-describedby="emailHelp"
//             autoComplete="true"
//             required
//           />
//         </div>

//         <div className="mb-3">
//           <label htmlFor="password" className="form-label">
//             Password
//           </label>

//           <input
//             type="password"
//             className="form-control"
//             id="password"
//             name="password"
//             onChange={onChange}
//             minLength={5}
//             autoComplete="true"
//             required
//           />
//         </div>

//         <button type="submit" className="btn btn-primary">
//           Submit
//         </button>
//       </form>

// sx={{
//   "& .MuiInputLabel-root": { color: "green" },
//   border: "1px solid green",
//   borderRadius: 1
// }}
// InputProps={{ disableUnderline: true }}
