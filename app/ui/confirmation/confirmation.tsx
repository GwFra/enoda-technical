"use client";
"use client";

import { Box, Modal, Paper } from "@mui/material";
import OfferConfirmation from "@/app/ui/offer/offerConfirmation";
import BidConfirmation from "@/app/ui/bid/bidConfirmation";

export default function Confirmation(props: any) {
  const { handleClose, isOpen, type, typeId } = props;

  // should check for type === submit
  const SubmitOption = type === "offer" ? OfferConfirmation : BidConfirmation;

  return (
    <Modal open={isOpen} onClose={handleClose}>
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
          <SubmitOption handleClose={handleClose} id={typeId} />
        </Box>
      </Paper>
    </Modal>
  );
}
