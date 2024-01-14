"use client";

import { Grid } from "@mui/material";
import SideBar from "@/app/ui/home/sidebar";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Grid container>
      <Grid item xs={2}>
        <SideBar />
      </Grid>
      <Grid item xs={10}>
        {children}
      </Grid>
    </Grid>
  );
}
