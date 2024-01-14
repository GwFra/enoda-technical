"use client";

import { Box, List, ListItem } from "@mui/material";
import ListingPreview from "./preview";

type Props = {
  listings: any;
  defaultListing?: boolean;
  userListing?: boolean;
  userBid?: boolean;
};

export default function ListingContainer(props: Props) {
  const { listings } = props;
  // maximum of three - figure out pagination when there's more than three, use state for pagination and listing
  const listingsDisplay = listings.map((listing: any, index: number) => (
    <ListItem
      key={index}
      style={{
        margin: "20px 0px",
      }}
    >
      <ListingPreview {...listing} />
    </ListItem>
  ));
  return (
    <Box style={{ display: "flex", justifyContent: "center" }}>
      <List>{listingsDisplay}</List>
    </Box>
  );
}
