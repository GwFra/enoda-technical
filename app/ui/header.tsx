"use client";

import React from "react";
import { Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import Cookies from "universal-cookie";
import { useSiteContext } from "../context";
import Link from "next/link";

export default function Header() {
  const router = useRouter();
  const cookie = new Cookies();
  const state = useSiteContext();
  const [message, setMessage] = React.useState<string>("Sign in");

  React.useEffect(() => {
    setMessage(state.isLoggedIn ? "Sign out" : "Sign in");
  }, [state.isLoggedIn]);

  const handleClick = () => {
    const handleSignout = () => {
      cookie.remove("access_token");
      state.setLoggedIn(false);
    };
    state.isLoggedIn ? handleSignout() : router.push("/login");
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0px 15px 15px 15px",
        borderBottom: "2px solid black",
      }}
    >
      <Typography variant="h5">Enoda Technical</Typography>
      <Link href={state.isLoggedIn ? "/" : "/login"}>
        <Button onClick={handleClick} variant="contained">
          {message}
        </Button>
      </Link>
    </div>
  );
}
