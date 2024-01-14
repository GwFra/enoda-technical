"use client";

import React from "react";
import { Box, Grid, List, ListItem, Pagination } from "@mui/material";
import InfoPreview from "./preview";

type Props = {
  toDisplay: any;
  userListing?: boolean;
  isBid?: boolean;
  isOffer?: boolean;
};

export default function DisplayContainer(props: Props) {
  const { toDisplay, ...options } = props;

  const maxDisplay = 3;
  const [page, setPage] = React.useState(0);

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value - 1);
  };

  const displaySplit = toDisplay.reduce(
    (splits: any, _: any, index: number) => {
      if (index % maxDisplay === 0)
        splits.push(toDisplay.slice(index, index + maxDisplay));
      return splits;
    },
    []
  );

  const listingsDisplay = displaySplit[page]?.map(
    (display: any, index: number) => (
      <ListItem
        key={index}
        style={{
          margin: "20px 0px",
        }}
      >
        <InfoPreview {...display} {...options} />
      </ListItem>
    )
  );
  return (
    <Box
      style={{
        borderRight: "2px solid black",
        height: "100%",
      }}
    >
      <Grid container direction="column" alignItems="center">
        <Grid item xs={9}>
          <List style={{ width: "100%" }}>{listingsDisplay}</List>
        </Grid>
        <Grid item xs={2}>
          <Pagination
            defaultPage={1}
            count={displaySplit.length}
            page={page + 1}
            onChange={handlePageChange}
            size="large"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
