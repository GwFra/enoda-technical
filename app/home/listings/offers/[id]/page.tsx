"use client";

import React from "react";
import DisplayContainer from "@/app/ui/listings/container";
import { request } from "@/app/lib/request";

export default function ListingOffer({ params }: any) {
  const [listingOffers, setListingOffers] = React.useState<any>([]);

  React.useEffect(() => {
    const getListingsBids = async () => {
      const { data } = await request("get", `listings/offers/${params.id}`);
      setListingOffers(data);
    };
    getListingsBids();
  }, [params.id]);

  // bidder email?
  return <DisplayContainer toDisplay={listingOffers} isOffer />;
}
