"use client";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useFormState, useFormStatus } from "react-dom";
import {
  authenticateEmailPaswsord,
  authenticateWithGoogle,
} from "@/app/lib/actions";
import { GoogleLogin } from "@react-oauth/google";
import Cookies from "universal-cookie";
import axios from "axios";
import "dotenv/config";
import { redirect, useRouter } from "next/navigation";

export default function SignIn() {
  const cookie = new Cookies();
  const router = useRouter();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const loginInfo = {
      email: form.get("email"),
      password: form.get("password"),
    };
    const { data } = await axios.post(
      `${process.env.BACKEND_URL}/auth/login`,
      loginInfo
    );
    cookie.set("access_token", data.access_token, { secure: true });
    // redirect("../home");
    router.push("/home");
  };

  return (
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
          Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <GoogleLogin onSuccess={authenticateWithGoogle as any} />
          </div>
        </Box>
      </Box>
    </Container>
  );
}
