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
      <Grid item xs={3}>
        <SideBar />
      </Grid>
      <Grid item xs={9}>
        {children}
      </Grid>
    </Grid>
  );
}
