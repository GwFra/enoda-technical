"use client";

import ListingPreview from "@/app/ui/listings/preview";
import { Box, List, ListItem } from "@mui/material";
import axios from "axios";
import React from "react";

export default function Offers() {
  const [offers, setOffers] = React.useState<any>([]);
  React.useEffect(() => {
    const getOffers = async () => {
      const { data } = await axios.get(
        `${process.env.BACKEND_URL}/listings/offers`
      );
      setOffers(data);
    };
    getOffers();
  }, []);

  const offersDisplay = offers.map((offer: any, index: number) => (
    <ListItem key={index} style={{ margin: "20px 0px" }}>
      <ListingPreview {...offer} isOffer={true} />
    </ListItem>
  ));
  return (
    <Box style={{ display: "flex", justifyContent: "center" }}>
      <List>{offersDisplay}</List>
    </Box>
  );
}
