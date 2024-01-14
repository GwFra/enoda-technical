"use client";

import Submit from "@/app/ui/confirmation/submit";
import { request } from "@/app/lib/request";

export default function BidConfirmation(props: any) {
  const handleClick = async () => {
    await request("put", "bids", {
      listingId: props.id,
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
