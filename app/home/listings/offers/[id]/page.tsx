"use client";

import axios from "axios";
import React from "react";

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

  // lisintg id - breif info
  // bidder email
  //
  return <div>{JSON.stringify(listingOffers)}</div>;
}
