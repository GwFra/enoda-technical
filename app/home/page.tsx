"use client";

import React from "react";
import DisplayContainer from "@/app/ui/listings/container";
import { request } from "@/app/lib/request";
// import { redirect } from "next/navigation";

export default function Home() {
  // if (!token) {
  //   redirect("/");
  // }
  // includes side bar
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
