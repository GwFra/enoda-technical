"use client";

import { Button, Typography } from "@mui/material";
import React from "react";

export default function Header() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        borderBottom: "2px solid black",
      }}
    >
      <Typography>Enoda Technical</Typography>
      <Button style={{ marginLeft: "auto" }}>Placeholder</Button>
    </div>
  );
}
