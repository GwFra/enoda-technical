"use client";

import Submit from "@/app/ui/confirmation/submit";
import { request } from "@/app/lib/request";

export default function OfferConfirmation(props: any) {
  const handleClick = async () => {
    await request("post", `bids/${props.id}`);
    // error handling perhaps
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
