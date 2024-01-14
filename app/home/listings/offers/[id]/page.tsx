"use client";

import React from "react";
import axios from "axios";
import DisplayContainer from "@/app/ui/listings/container";

export default function ListingOffer({ params }: any) {
  const [listingOffers, setListingOffers] = React.useState<any>([]);

  React.useEffect(() => {
    const getListingsBids = async () => {
      const { data } = await axios.get(
        `${process.env.BACKEND_URL}/listings/offers/${params.id}`
      );
      setListingOffers(data);
    };
    getListingsBids();
  }, [params.id]);

  // bidder email?
  return <DisplayContainer toDisplay={listingOffers} isOffer={true} />;
}
