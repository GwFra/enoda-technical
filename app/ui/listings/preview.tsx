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
import Confirmation from "@/app/ui/confirmation/confirmation";
import "dotenv/config";

type Props = {
  id: string | number;
  title: string;
  quantity: number;
  supplierId: number;
  cost: number;
  start: number;
  end: number;
  isBid?: boolean;
  isOffer?: boolean;
  bidId?: number;
  accepted?: boolean;
  refresh?: any;
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

export default function InfoPreview(props: Props) {
  const [confirmModal, setConfirmModal] = React.useState({
    isOpen: false,
    type: "",
    typeId: undefined,
  });

  const pathname = usePathname();
  const previewRegex = /(listings)\/([0-9])+/;
  const isPreview = previewRegex.test(pathname);
  // spinner waiting for bid to be placed / input
  // check if bid has already been placed

  const {
    id,
    title,
    quantity,
    cost,
    start,
    end,
    supplierId,
    isBid,
    isOffer,
    bidId,
    accepted,
  } = props;

  const userId = 1000;
  const currentDate = Date.now();
  const hasEnded = end < currentDate; // listing has closed
  const hasStarted = start > currentDate; // listing has started
  const timingString = determineTiming(hasStarted, hasEnded, start, end);

  const openModal = (type: string, typeId?: any) => {
    setConfirmModal({
      isOpen: true,
      type,
      typeId,
    });
  };
  const handleClose = () => {
    setConfirmModal({ ...confirmModal, isOpen: false });
  };

  return (
    <>
      <Confirmation
        {...confirmModal}
        handleClose={handleClose}
        listingId={id}
      />
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
                {isBid ? (
                  accepted ? (
                    <Typography>Accepted!</Typography>
                  ) : (
                    <Typography>Waiting for response</Typography>
                  )
                ) : isOffer ? (
                  accepted ? (
                    <Typography>You have Accepted</Typography>
                  ) : (
                    <Button
                      variant="contained"
                      size="small"
                      onClick={() => openModal("offer", bidId)}
                    >
                      {"Accept offer"}
                    </Button>
                  )
                ) : supplierId === userId ? (
                  <Link href={`/home/listings/offers/${id}`}>
                    <Button variant="contained" size="small">
                      {"View offers"}
                    </Button>
                  </Link>
                ) : (
                  <Button
                    variant="contained"
                    size="small"
                    onClick={() => openModal("bid")}
                  >
                    {"Place bid"}
                  </Button>
                )}
              </CardActions>
            </Box>
          </Box>
        </Card>
      </Paper>
    </>
  );
}
