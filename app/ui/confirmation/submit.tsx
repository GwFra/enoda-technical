"use client";

import { Button, Typography } from "@mui/material";

export default function Submit(props: any) {
  const { handleClose, handleConfirm, message } = props;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography>{message}</Typography>
      <div style={{ display: "flex", gap: 30, paddingTop: "10px" }}>
        <Button variant="contained" onClick={handleConfirm}>
          Confirm
        </Button>
        <Button variant="contained" color="error" onClick={handleClose}>
          Cancel
        </Button>
      </div>
    </div>
  );
}
