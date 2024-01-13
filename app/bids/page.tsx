"use client";

import { Box, List, ListItem } from "@mui/material";
import axios from "axios";
import React from "react";
import ListingPreview from "../ui/listings/preview";

export default function BidsPage() {
  const [bids, setBids] = React.useState<any>([]);
  React.useEffect(() => {
    const getBids = async () => {
      const { data } = await axios.get(`${process.env.BACKEND_URL}/bids`);
      const getListingsWithBids = data.map((bid: any) => {
        const { listingId } = bid;
        return axios.get(`${process.env.BACKEND_URL}/listings/${listingId}`);
      });
      const listingsRequests = await Promise.all(getListingsWithBids);
      const listings = listingsRequests.map(({ data }) => data);
      setBids(listings);
    };
    getBids();
  }, []);

  const bidsDisplay = bids.map((bids: any, index: number) => (
    <ListItem key={index} style={{ margin: "20px 0px" }}>
      <ListingPreview {...bids} />
    </ListItem>
  ));

  return (
    <Box style={{ display: "flex", justifyContent: "center" }}>
      <List>{bidsDisplay}</List>
    </Box>
  );
}
