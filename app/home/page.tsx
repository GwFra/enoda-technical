"use client";

import React from "react";
import DisplayContainer from "@/app/ui/listings/container";
import { request } from "@/app/lib/request";

export default function Home() {
  const [listings, setListings] = React.useState<any>([]);
  React.useEffect(() => {
    const getListings = async () => {
      const { data } = await request("get", "listings");
      setListings(data);
    };
    getListings();
  }, []);
  return <DisplayContainer toDisplay={listings} />;
}
