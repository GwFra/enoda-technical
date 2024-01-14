"use client";

import React from "react";
import { Button, Typography } from "@mui/material";
import { redirect } from "next/navigation";
import Cookies from "universal-cookie";
import { useSiteContext } from "../context";
import Link from "next/link";

export default function Header() {
  const cookie = new Cookies();
  const state = useSiteContext();

  React.useEffect(() => {
    // re-render when isLoggedIn has updated
  }, [state.isLoggedIn]);

  const buttonDisplay = state.isLoggedIn ? "Sign out" : "Sign in";
  const handleClick = () => {
    const handleSignout = () => {
      cookie.remove("access_token");
      state.setLoggedIn(false);
    };
    state.isLoggedIn ? handleSignout() : redirect("/login");
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
          {buttonDisplay}
        </Button>
      </Link>
    </div>
  );
}
