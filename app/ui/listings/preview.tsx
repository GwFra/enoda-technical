"use client";

import React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  FormControl,
  Modal,
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
  cost: number;
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
  const [placingBid, setPlacingBid] = React.useState<boolean>(false);
  const pathname = usePathname();
  const previewRegex = /(listings)\/([0-9])+/;
  const isPreview = previewRegex.test(pathname);
  const isBid = pathname.includes("/bids");
  const isUserListings = pathname.includes("/listings/user");
  // spinner waiting for bid to be placed / input
  // check if bid has already been placed

  const { id, title, quantity, cost, start, end } = props;
  const currentDate = Date.now();
  const hasEnded = end < currentDate; // listing has closed
  const hasStarted = start > currentDate; // listing has started
  const timingString = determineTiming(hasStarted, hasEnded, start, end);

  const handleInitialBidPlacement = () => {
    setPlacingBid(true);
  };
  const handleClose = () => {
    setPlacingBid(false);
  };

  const handleClick = async () => {
    // get token and add it to react state - probably not wise but easy peasy
    try {
      //
      await axios.put(`${process.env.BACKEND_URL}/bids`, { listingId: id });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <Modal open={placingBid} onClose={handleClose}>
        <Paper
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "400px",
            height: "200px",
            transform: "translate(-50%, -50%)",
          }}
          elevation={24}
        >
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <div>Are you sure you want place a bid </div>
          </Box>
        </Paper>
      </Modal>
      <Paper elevation={24} style={{ width: "100%" }}>
        <Card
          variant="outlined"
          style={{ width: "100%", height: "fit-content" }}
        >
          <Box style={{ display: "flex", width: "100%", padding: 15 }}>
            <div>This is where the image will go of some kind</div>
            <Box style={{ display: "flex", width: "100%" }}>
              <CardContent>
                <Typography>{title}</Typography>
                <Typography color="text.secondary">
                  Quantity: {quantity} MWh
                </Typography>
                <Typography color="text.secondary">
                  Price: {cost} €/MWh
                </Typography>
                <Typography color="text.secondary">{timingString}</Typography>
                {isPreview ? (
                  <Typography color="text.secondary">Seller</Typography>
                ) : (
                  <></>
                )}
              </CardContent>
              <CardActions style={{ marginLeft: "auto", marginTop: "auto" }}>
                {isPreview ? (
                  <Button
                    variant="contained"
                    size="small"
                    onClick={handleInitialBidPlacement}
                  >
                    {"Place bid"}
                  </Button>
                ) : isBid ? (
                  <div>Waiting to be accepted</div>
                ) : isUserListings ? (
                  <Link href={`/bids/${id}`}>
                    <Button variant="contained" size="small">
                      {"View bids"}
                    </Button>
                  </Link>
                ) : (
                  <Link href={`/listings/${id}`}>
                    <Button variant="contained" size="small">
                      {"View listing"}
                    </Button>
                  </Link>
                )}
              </CardActions>
            </Box>
          </Box>
        </Card>
      </Paper>
    </div>
  );
}
