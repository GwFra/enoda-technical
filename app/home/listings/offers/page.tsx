"use client";

import React from "react";
import DisplayContainer from "@/app/ui/listings/container";
import { request } from "@/app/lib/request";

export default function Offers() {
  const [offers, setOffers] = React.useState<any>([]);
  React.useEffect(() => {
    const getOffers = async () => {
      const { data } = await request("get", "listings/offers");
      setOffers(data);
    };
    getOffers();
  }, []);
  return <DisplayContainer toDisplay={offers} isOffer />;
}
