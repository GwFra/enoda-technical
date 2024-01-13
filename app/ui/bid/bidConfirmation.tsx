"use client";

import { Box, Modal, Paper } from "@mui/material";
import SubmitBid from "@/app/ui/bid/submitBid";
import axios from "axios";

export default function BidConfirmation(props: any) {
  const handleClick = async () => {
    // get token and add it to react state - probably not wise but easy peasy
    await axios.put(`${process.env.BACKEND_URL}/bids`, {
      listingId: props.listingId,
    });
    props.handleClose();
  };
  return (
    <Modal open={props.isOpen} onClose={props.handleClose}>
      <Paper
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "350px",
          height: "150px",
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
          <SubmitBid
            handleConfirm={handleClick}
            handleClose={props.handleClose}
          />
        </Box>
      </Paper>
    </Modal>
  );
}
