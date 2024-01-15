"use client";

import React from "react";
import DisplayContainer from "@/app/ui/listings/container";
import { request } from "@/app/lib/request";

export default function UserListings() {
  const [userListings, setUserListings] = React.useState<any>([]);
  React.useEffect(() => {
    const getUserListings = async () => {
      const { data } = await request("get", `listings/user`);
      setUserListings(data);
    };
    getUserListings();
  }, []);

  return <DisplayContainer toDisplay={userListings} />;
}
