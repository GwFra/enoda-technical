"use client";

import axios from "axios";
import React from "react";
import DisplayContainer from "@/app/ui/listings/container";

export default function Home() {
  // includes side bar
  const [listings, setListings] = React.useState<any>([]);
  React.useEffect(() => {
    const getListings = async () => {
      const { data } = await axios.get(`${process.env.BACKEND_URL}/listings`);
      setListings(data);
    };
    getListings();
  }, []);
  return <DisplayContainer toDisplay={listings} />;
}
