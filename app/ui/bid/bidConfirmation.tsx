"use client";

import axios from "axios";
import Submit from "@/app/ui/confirmation/submit";

export default function BidConfirmation(props: any) {
  const handleClick = async () => {
    await axios.put(`${process.env.BACKEND_URL}/bids`, {
      listingId: props.listingId,
    });
    props.handleClose();
  };
  return (
    <Submit
      handleConfirm={handleClick}
      handleClose={props.handleClose}
      message={"Are you sure you want to submit this bid?"}
    ></Submit>
  );
}
