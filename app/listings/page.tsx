"use client";

import { Box } from "@mui/material";
import axios from "axios";
import React from "react";
import ListingContainer from "../ui/listings/container";

export default function ListingsPage() {
  const [listings, setListings] = React.useState<any>([]);
  React.useEffect(() => {
    const getListings = async () => {
      const { data } = await axios.get(`${process.env.BACKEND_URL}/listings`);
      setListings(data);
    };
    getListings();
  }, []);
  return (
    <Box style={{ display: "flex", justifyContent: "center" }}>
      <ListingContainer listings={listings} />
    </Box>
  );
}
