"use client";

import DisplayContainer from "@/app/ui/listings/container";
import axios from "axios";
import React from "react";

export default function Offers() {
  const [offers, setOffers] = React.useState<any>([]);
  React.useEffect(() => {
    const getOffers = async () => {
      const { data } = await axios.get(
        `${process.env.BACKEND_URL}/listings/offers`
      );
      setOffers(data);
    };
    getOffers();
  }, []);
  return <DisplayContainer toDisplay={offers} isOffer />;
}
