"use client";

import React from "react";
import DisplayContainer from "@/app/ui/listings/container";
import { request } from "@/app/lib/request";

export default function BidsPage() {
  const [bids, setBids] = React.useState<any>([]);
  React.useEffect(() => {
    const getBids = async () => {
      const { data } = await request("get", "bids");
      const getListingsWithBids = data.map((bid: any) => {
        const { listingId } = bid;
        return request("get", `listings/${listingId}`);
      });

      const listingsRequests = await Promise.all(getListingsWithBids);
      const listings = listingsRequests.map((listing) => {
        const { id, accepted } = data.filter(
          (bid: any) => bid.listingId === bid.id
        );
        const info = {
          ...listing.data,
          bidId: id,
          accepted,
        };
        return info;
      });
      setBids(listings);
    };
    getBids();
  }, []);

  return <DisplayContainer toDisplay={bids} isBid />;
}
