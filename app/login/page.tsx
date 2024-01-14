"use client";

import {
  Avatar,
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import { authenticateWithGoogle } from "@/app/lib/actions";
import { GoogleLogin } from "@react-oauth/google";
import Cookies from "universal-cookie";
import axios from "axios";
import "dotenv/config";
import { useRouter } from "next/navigation";
import bcrypt from "bcryptjs";
import { request } from "@/app/lib/request";

export default function SignIn() {
  const cookie = new Cookies();
  const router = useRouter();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);

    const loginInfo = {
      email: form.get("email"),
    };
    const hashedPassword = await request("post", "auth/login", loginInfo);
    const correctPassword = bcrypt.compareSync(
      form.get("password") as string,
      hashedPassword.data
    );
    if (correctPassword) {
      const { data } = await request("post", "auth/login/token", {
        ...loginInfo,
        password: hashedPassword.data,
      });
      cookie.set("access_token", data.access_token, { secure: true });
      router.push("/home");
    } else {
      // throw some kind of unauthorized error
    }
  };

  return (
    <Container component="main" maxWidth="xs">
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
