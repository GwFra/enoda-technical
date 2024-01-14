import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import styles from "./page.module.css";
import { Grid } from "@mui/material";
import Header from "@/app/ui/header";
import Navigation from "./ui/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Enoda Technical",
  description: "Electricity Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className={styles.main}>
          <div style={{ height: "100%", width: "100%" }}>
            <Grid
              container
              direction="column"
              spacing={2}
              xs={12}
              style={{ height: "100%" }}
            >
              <Grid item xs={1}>
                <Header />
              </Grid>
              <Grid item xs={1}>
                <Navigation />
              </Grid>
              <Grid
                item
                xs={10}
                style={{ padding: "16px 64px 0px", height: "100%" }}
              >
                <Grid item xs={1}>
                  <Header />
                </Grid>
                <Grid
                  item
                  xs={11}
                  style={{ padding: "16px 64px 0px", height: "100%" }}
                >
                  {children}
                </Grid>
              </Grid>
            </Grid>
          </div>
        </main>
      </body>
    </html>
  );
}
