"use client";

import { Box, List, ListItem } from "@mui/material";
import ListingPreview from "./preview";

export default function ListingContainer(props: any) {
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
