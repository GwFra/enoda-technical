"use client";

import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import BarChartIcon from "@mui/icons-material/BarChart";
import ArticleIcon from "@mui/icons-material/Article";
import InboxIcon from "@mui/icons-material/Inbox";
import Link from "next/link";

export default function SideBar() {
  return (
    <div
      style={{ width: "100%", height: "100%", borderRight: "2px solid black" }}
    >
      <List style={{ width: "80%" }}>
        <Link href="/home">
          <Paper
            elevation={23}
            style={{ width: "100%", height: "100%", margin: "20px 0px" }}
          >
            <ListItem key={"home"}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
          </Paper>
        </Link>
        <Link href="/home/bids">
          <Paper
            elevation={23}
            style={{ width: "100%", height: "100%", margin: "20px 0px" }}
          >
            <ListItem key={"bids"}>
              <ListItemIcon>
                <BarChartIcon />
              </ListItemIcon>
              <ListItemText primary="Your Bids" />
            </ListItem>
          </Paper>
        </Link>
        <Link href="/home/listings">
          <Paper
            elevation={23}
            style={{ width: "100%", height: "100%", margin: "20px 0px" }}
          >
            <ListItem key={"bids"}>
              <ListItemIcon>
                <ArticleIcon />
              </ListItemIcon>
              <ListItemText primary="Your Listings" />
            </ListItem>
          </Paper>
        </Link>
        <Link href="/home/listings/offers">
          <Paper
            elevation={23}
            style={{ width: "100%", height: "100%", margin: "20px 0px" }}
          >
            <ListItem key={"bids"}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Your Offers" />
            </ListItem>
          </Paper>
        </Link>
      </List>
    </div>
  );
}
