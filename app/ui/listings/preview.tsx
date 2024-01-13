"use client";

import React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Paper,
  // CardMedia,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import axios from "axios";
import "dotenv/config";

type Props = {
  id: string | number;
  title: string;
  quantity: number;
  price: number;
  start: number;
  end: number;
};

function determineTiming(
  hasStarted: boolean,
  hasEnded: boolean,
  start: number,
  end: number
) {
  if (!hasStarted) {
    // countdown to start - return start date and time Starting: ...
    return `Starting at: ${new Date(start).toLocaleString().split(",")[1]}`;
  } else if (!hasEnded) {
    // countdown to end Ending: ...
    return `Ending at: ${new Date(end).toLocaleString().split(",")[1]}`;
  } else {
    // countdown on how long it should be till it should no longer be shown
    return `Has ended`;
  }
}

export default function ListingPreview(props: Props) {
  const pathname = usePathname();
  const preview = pathname.includes("/listings/");
  // spinner waiting for bid to be placed

  const { id, title, quantity, price, start, end } = props;
  const currentDate = Date.now();
  const hasEnded = end < currentDate; // listing has closed
  const hasStarted = start > currentDate; // listing has started
  const timingString = determineTiming(hasStarted, hasEnded, start, end);

  const handleClick = async () => {
    // add this to config
    // get token and add it to react state - probably not wise but easy peasy
    try {
      await axios.put(`${process.env.BACKEND_URL}/bids`, { listingId: id });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Paper elevation={24} style={{ width: "100%" }}>
      <Card variant="outlined" style={{ width: "100%", height: "fit-content" }}>
        <Box style={{ display: "flex", width: "100%", padding: 15 }}>
          <div>This is where the image will go of some kind</div>
          <Box style={{ display: "flex", width: "100%" }}>
            <CardContent>
              <Typography>{title}</Typography>
              <Typography color="text.secondary">
                Quantity: {quantity} MWh
              </Typography>
              <Typography color="text.secondary">
                Price: {price} €/MWh
              </Typography>
              <Typography color="text.secondary">{timingString}</Typography>
              <Typography color="text.secondary">Seller</Typography>
            </CardContent>
            <CardActions
              style={{ marginLeft: "auto", marginTop: "auto", minWidth: "" }}
            >
              {!preview ? (
                <Link href={`/listings/${id}`}>
                  <Button variant="contained" size="small">
                    {"View listing"}
                  </Button>
                </Link>
              ) : (
                <Button variant="contained" size="small" onClick={handleClick}>
                  {"Place bid"}
                </Button>
              )}
            </CardActions>
          </Box>
        </Box>
      </Card>
    </Paper>
  );
}
