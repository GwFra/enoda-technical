"use client";

import ListingPreview from "@/app/ui/listings/preview";
import { Box, List, ListItem } from "@mui/material";
import axios from "axios";
import React from "react";

export default function ListingOffer({ params }: any) {
  const [listingOffers, setListingOffers] = React.useState<any>([]);

  React.useEffect(() => {
    const getListingsBids = async () => {
      const { data } = await axios.get(
        `${process.env.BACKEND_URL}/listings/offers/${params.id}`
      );
      setListingOffers(data);
    };
    getListingsBids();
  }, [params.id]);

  // lisintg id - breif info
  // bidder email
  //
  const listingOffersDisplay = listingOffers.map(
    (offer: any, index: number) => (
      <ListItem key={index} style={{ margin: "20px 0px" }}>
        <ListingPreview {...offer} isOffer={true} />
      </ListItem>
    )
  );
  return (
    <Box style={{ display: "flex", justifyContent: "center" }}>
      <List>{listingOffersDisplay}</List>
    </Box>
  );
}
