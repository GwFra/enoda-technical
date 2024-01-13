"use client";

import ListingContainer from "@/app/ui/listings/container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Link from "next/link";
import React from "react";
import axios from "axios";

export default function Home() {
  // TEMP
  const [listings, setListings] = React.useState<any>([]);
  React.useEffect(() => {
    const getListings = async () => {
      const { data } = await axios.get(`${process.env.BACKEND_URL}/listings`);
      setListings(data);
    };
    getListings();
  }, []);
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
        <ListingContainer listings={listings} />
      </Grid>
    </Grid>
  );
}
