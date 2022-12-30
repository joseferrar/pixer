import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputBase,
  OutlinedInput,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import * as yup from "yup";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import logo from "../../../packages/images/logo.svg";
import { FormInput } from "../../../components/Inputs/FormInput";
import { InputLabel } from "../../../components/labals/InputLabel";
import { GreenLink } from "../../../components/Links";
import { SucessButton } from "../../../components/Buttons";

function Register() {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      name: yup.string().required("Name is required"),
      email: yup
        .string()
        .email()
        .required("You must need to provide your email address"),
      password: yup
        .string()
        .required("Password is Required!")
        .min(6, "6 characters required"),
    }),
    onSubmit: async (data) => {
      console.log(data);
    },
  });

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };
  return (
    <div>
      <Box>
        <Paper
          elevation={1}
          style={{
            borderRadius: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: 380,
            margin: "100px auto",
            padding: 22,
            left: "40%",
            top: "10%",
            position: "absolute",
          }}
        >
          <img src={logo} style={{ width: 120 }} alt="logo" />
          <Typography
            component="h1"
            variant="subtitle2"
            fontStyle={"italic"}
            marginTop={2}
            color={"gray"}
          >
            Login to admin
          </Typography>
          <form style={{ marginTop: 13, width: "100%", marginLeft: 18 }}>
            <FormControl>
              <InputLabel>Name</InputLabel>
              <FormInput
                type="text"
                style={{ width: 340, height: 16 }}
                value={formik.values.name}
                onChange={formik.handleChange("name")}
              />
              <FormHelperText error style={{ margin: 5 }}>
                {formik.touched.name ? formik.errors.name : null}
              </FormHelperText>
            </FormControl>
            <FormControl>
              <InputLabel>Email</InputLabel>
              <FormInput
                type="text"
                style={{ width: 340, height: 16 }}
                value={formik.values.email}
                onChange={formik.handleChange("email")}
              />
              <FormHelperText error style={{ margin: 5 }}>
                {formik.touched.email ? formik.errors.email : null}
              </FormHelperText>
            </FormControl>
            <FormControl required fullWidth  variant="outlined">
              <InputLabel>Password</InputLabel>
              <Paper
                elevation={0}
                component="form"
                sx={{
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  width: 360,
                  height: 40,
                  border: "1px solid #ccc",
                }}
              >
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  type={secureTextEntry ? "password" : "text"}
                  value={formik.values.password}
                  onChange={formik.handleChange("password")}
                />
                <IconButton
                  sx={{ p: "10px" }}
                  aria-label="menu"
                  onClick={toggleSecureEntry}
                >
                  {secureTextEntry ? (
                    <VisibilityOffIcon />
                  ) : (
                    <RemoveRedEyeIcon />
                  )}
                </IconButton>
              </Paper>
              <FormHelperText error style={{ margin: 5 }}>
                {formik.touched.password ? formik.errors.password : null}
              </FormHelperText>
            </FormControl>

            <SucessButton
              type="submit"
              style={{ width: 370, height: 46, marginTop: 16 }}
              onClick={formik.handleSubmit}
            >
              Register
            </SucessButton>
            <Divider style={{ marginTop: 40 }}>Or</Divider>
          </form>
          <Grid
            item
            container
            style={{
              marginTop: 16,
              justifyContent: "center",
            }}
          >
            <Typography color="gray">Already have an account?</Typography>
            <Link
              to="/login"
              variant="body2"
              style={{
                marginLeft: 8,
                color: "rgb(22 139 25)",
                fontWeight: "bold",
                fontFamily: "inherit",
              }}
            >
              {"Login"}
            </Link>
          </Grid>
        </Paper>
      </Box>
    </div>
  );
}

export default Register;
