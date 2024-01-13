"use client";

import axios from "axios";
import React from "react";

export default function Bids({ params }: any) {
  const [listingBids, setListingBids] = React.useState<any>([]);

  React.useEffect(() => {
    const getListingsBids = async () => {
      const { data } = await axios.get(
        `${process.env.BACKEND_URL}/bids/${params.id}`
      );
      setListingBids(data);
    };
    getListingsBids();
  }, [params.id]);

  // lisintg id - breif info
  // bidder email
  //
  return <div>{JSON.stringify(listingBids)}</div>;
}
