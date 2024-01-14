"use client";

import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import BarChartIcon from "@mui/icons-material/BarChart";
import ArticleIcon from "@mui/icons-material/Article";
import InboxIcon from "@mui/icons-material/Inbox";
import Link from "next/link";

export default function SideBar() {
  return (
    <List>
      <Link href="/home">
        <ListItem key={"home"}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
      </Link>
      <Link href="/home/bids">
        <ListItem key={"bids"}>
          <ListItemIcon>
            <BarChartIcon />
          </ListItemIcon>
          <ListItemText primary="Your Bids" />
        </ListItem>
      </Link>
      <Link href="/home/listings">
        <ListItem key={"bids"}>
          <ListItemIcon>
            <ArticleIcon />
          </ListItemIcon>
          <ListItemText primary="Your Listings" />
        </ListItem>
      </Link>
      <Link href="/home/listings/offers">
        <ListItem key={"bids"}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Your Offers" />
        </ListItem>
      </Link>
    </List>
  );
}
