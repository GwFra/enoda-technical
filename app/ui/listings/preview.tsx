"use client";

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

type Props = {
  id: string | number;
  title: string;
  quantity: number;
  price: number;
  timing: {
    startDate: number;
    endDate: number;
  };
};

function determineTiming(
  hasStarted: boolean,
  hasEnded: boolean,
  startDate: number,
  endDate: number
) {
  if (!hasStarted) {
    // countdown to start - return start date and time Starting: ...
    return `Starting at: ${new Date(startDate).toLocaleString().split(",")[1]}`;
  } else if (!hasEnded) {
    // countdown to end Ending: ...
    return `Ending at: ${new Date(endDate).toLocaleString().split(",")[1]}`;
  } else {
    // countdown on how long it should be till it should no longer be shown
    return `Has ended`;
  }
}

export default function ListingPreview(props: Props) {
  const { id, title, quantity, price, timing } = props;
  const { startDate, endDate } = timing;
  const currentDate = Date.now();
  const hasEnded = endDate < currentDate; // listing has closed
  const hasStarted = startDate > currentDate; // listing has started
  const timingString = determineTiming(
    hasStarted,
    hasEnded,
    startDate,
    endDate
  );

  return (
    <Paper elevation={24} style={{ maxWidth: "50vw", maxHeight: "15vh" }}>
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
              <Link href={`/listings/${id}`}>
                <Button variant="contained" size="small">
                  View listing
                </Button>
              </Link>
            </CardActions>
          </Box>
        </Box>
      </Card>
    </Paper>
  );
}
