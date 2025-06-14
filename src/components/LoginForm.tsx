"use client";
import { VisibilityOffOutlined, VisibilityOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import NextLink from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useState } from "react";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  // Handler to toggle password visibility
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  // Handler to prevent default mouse down behavior on password toggle button
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 400,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 4 }}>
        Log In
      </Typography>

      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        sx={{ mb: 2 }}
      />
      <TextField
        label="Password"
        variant="outlined"
        fullWidth
        margin="normal"
        type={showPassword ? "text" : "password"}
        sx={{ mb: 1 }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
                sx={{ color: "primary.main" }}>
                {showPassword ? (
                  <VisibilityOffOutlined />
                ) : (
                  <VisibilityOutlined />
                )}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      {/* Forgot Password */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}>
        <FormControlLabel
          control={<Checkbox />}
          label="Remember me"
          sx={{
            "& .MuiTypography-root": {
              fontSize: "0.875rem",
            },
          }}
        />
        <Link component={NextLink} href="#" variant="body2" underline="none">
          Forget password?
        </Link>
      </Box>

      {/* Submit Button */}
      <Button
        variant="contained"
        color="primary"
        href="/onboarding/"
        fullWidth
        size="large"
        endIcon={<ArrowForwardIcon />}
        sx={{
          py: 1.5,
          fontSize: "1.1rem",
          textTransform: "uppercase",
          letterSpacing: 1,
        }}>
        Log In
      </Button>

      {/* "Don't have an account?" text and link */}
      <Box sx={{ mt: 3, mb: 3 }}>
        <Typography variant="body2" color="text.secondary">
          Don&apos;t have an account?{" "}
          <Link component={NextLink} href="#" underline="always">
            Sign in
          </Link>
        </Typography>
      </Box>

      <Button
        variant="outlined"
        fullWidth
        size="large"
        startIcon={<Box component="img" src={"/svgs/icons/google.svg"} />}
        sx={{
          py: 1.5,
          fontSize: "1.1rem",
          color: "text.secondary",
          textTransform: "none",
        }}>
        Log in with Google
      </Button>
    </Box>
  );
};

export default LoginForm;
