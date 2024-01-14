"use client";

import { Box, List, ListItem } from "@mui/material";
import axios from "axios";
import React from "react";
import ListingPreview from "@/app/ui/listings/preview";

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
      const listings = listingsRequests.map((listing) => {
        const { id, accepted } = data.find(
          (bid: any) => bid.listingId === bid.id
        );
        const info = {
          ...listing.data,
          bidId: id,
          accepted,
        };
        return info;
      });
      setBids(listings);
    };
    getBids();
  }, []);

  const bidsDisplay = bids.map((bids: any, index: number) => (
    <ListItem key={index} style={{ margin: "20px 0px" }}>
      <ListingPreview {...bids} isBid={true} />
    </ListItem>
  ));

  return (
    <Box style={{ display: "flex", justifyContent: "center" }}>
      <List>{bidsDisplay}</List>
    </Box>
  );
}
