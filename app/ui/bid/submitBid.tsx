"use client";

import { Button, Typography } from "@mui/material";

export default function SubmitBid(props: any) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography>Are you sure you want to submit this bid?</Typography>
      <div style={{ display: "flex", gap: 30, paddingTop: "10px" }}>
        <Button variant="contained" onClick={props.handleConfirm}>
          Confirm
        </Button>
        <Button variant="contained" color="error" onClick={props.handleClose}>
          Cancel
        </Button>
      </div>
    </div>
  );
}
