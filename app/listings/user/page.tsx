"use client";

import React from "react";
import ListingContainer from "@/app/ui/listings/container";
import axios from "axios";
import { Box } from "@mui/material";

export default function UserListings() {
  const [userListings, setUserListings] = React.useState<any>([]);
  React.useEffect(() => {
    const getUserListings = async () => {
      const { data } = await axios.get(
        `${process.env.BACKEND_URL}/listings/user/${1000}`
      );
      setUserListings(data);
    };
    getUserListings();
  }, []);

  return (
    <Box style={{ display: "flex", justifyContent: "center" }}>
      <ListingContainer listings={userListings} />
    </Box>
  );
}
