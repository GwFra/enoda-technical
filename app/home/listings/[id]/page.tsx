"use client";

import React from "react";
import axios from "axios";
import ListingPreview from "@/app/ui/listings/preview";

export default function Page({ params }: { params: { id: number } }) {
  const [listing, setListing] = React.useState<any>({});
  const { id } = params;

  React.useEffect(() => {
    const getListing = async () => {
      const { data } = await axios.get(
        `${process.env.BACKEND_URL}/listings/${id}`
      );
      setListing(data);
    };
    getListing();
  }, [id]);
  // spinner whilst we wait for listing to be defined
  // ghost object
  return Object.keys(listing).length === 0 ? (
    <div>Waiting for listing</div>
  ) : (
    <ListingPreview {...listing} />
  );
}
