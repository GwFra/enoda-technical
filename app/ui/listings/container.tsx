"use client";

import { Box, List, ListItem } from "@mui/material";
import InfoPreview from "./preview";

type Props = {
  toDisplay: any;
  defaultListing?: boolean;
  userListing?: boolean;
  isBid?: boolean;
  isOffer?: boolean;
};

export default function DisplayContainer(props: Props) {
  const { toDisplay, ...options } = props;
  const listingsDisplay = toDisplay.map((display: any, index: number) => (
    <ListItem
      key={index}
      style={{
        margin: "20px 0px",
      }}
    >
      <InfoPreview {...display} {...options} />
    </ListItem>
  ));
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        borderRight: "2px solid black",
        height: "100%",
      }}
    >
      <List style={{ width: "80%" }}>{listingsDisplay}</List>
    </Box>
  );
}
