import React, { useState } from "react";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
  TextField,
} from "@material-ui/core";
import Icon from "./icon";
import { useHistory } from "react-router-dom";
import { signin, signup } from "../../actions/auth";

import { useDispatch } from "react-redux";

import { GoogleLogin } from "react-google-login";
import useStyles from "./styles";
import Input from "./Input";
// import { LockOutlined } from "@material-ui/icons";
import LockOutlinedIcon from "@material-ui/icons/LockOpenOutlined";
function Auth() {
  const history = useHistory();
  const classes = useStyles();
  // const isSignUp = true;

  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPasspword: "",
  };

  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      dispatch(signup(formData, history));
    } else {
      dispatch(signin(formData, history));
    }
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const switchMode = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
    setShowPassword(false);
  };

  const dispatch = useDispatch();

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: "AUTH", data: { result, token } });
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const googleFailure = (error) => {
    console.log(error);
    console.log("google sign in in unsuccessfull");
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);
  return (
    <Container component="main" maxWidth="xs" style={{ marginTop: "70px" }}>
      <Paper className={classes.paper} elevation={0}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography varient="h5">{isSignUp ? "Sign Up" : "Sign In"}</Typography>

        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignUp && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                  half
                />
              </>
            )}
            <Input
              name="email"
              label="Email Address"
              type="email"
              handleChange={handleChange}
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            {isSignUp && (
              <Input
                name="confirmPassword"
                label="Reapet Password"
                type="password"
                handleChange={handleChange}
              />
            )}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="outlined"
            color="primary"
            className={classes.submit}
          >
            {isSignUp ? "SIgn Up" : "Sign In"}
          </Button>

          <GoogleLogin
            clientId="187195070667-0n1v5p7nflrqbkhhs5h9ohtnfqvehqh5.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button
                className={classes.googleButton}
                color="primary"
                fullWidth
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                startIcon={<Icon />}
                variant="outlined"
              >
                Google SIgn In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"
          />

          <Grid container justify>
            <Grid item>
              <Button
                style={{ textTransform: "none", color: "#55ADEE" }}
                onClick={switchMode}
              >
                {isSignUp
                  ? "Already have an account? Sign In"
                  : "Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
}

export default Auth;
