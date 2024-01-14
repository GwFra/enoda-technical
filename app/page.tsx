"use client";

import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Link from "next/link";

export default function Home() {
  return (
    <Grid container spacing={2} style={{ height: "100%" }}>
      <Grid item xs={3}>
        <p>
          <Typography>Left side</Typography>
          This is where you need to login to see all the electricty being sold
        </p>
        <Link href="/login">
          <Button>Log in</Button>
        </Link>
      </Grid>
      <Grid item xs={9}>
        <Typography>Main content</Typography>
      </Grid>
    </Grid>
  );
}
