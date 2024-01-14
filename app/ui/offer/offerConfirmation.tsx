"use client";

import Submit from "@/app/ui/confirmation/submit";
import axios from "axios";

export default function OfferConfirmation(props: any) {
  const handleClick = async () => {
    // get token and add it to react state - probably not wise but easy peasy
    await axios.post(`${process.env.BACKEND_URL}/bids/${props.id}`);
    props.handleClose();
  };
  return (
    <Submit
      handleConfirm={handleClick}
      handleClose={props.handleClose}
      message={"Are you sure you want to accept this offer?"}
    ></Submit>
  );
}
