import Header from "@/app/ui/header";
import React from "react";
import styles from "./page.module.css";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Link from "next/link";

export default function Home() {
  return (
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
          <Grid
            item
            xs={11}
            style={{ padding: "16px 64px 0px", height: "100%" }}
          >
            <Grid container spacing={2} style={{ height: "100%" }}>
              <Grid item xs={3}>
                <p>
                  <Typography>Left side</Typography>
                  This is where you need to login to see all the electricty
                  being sold
                </p>
                <Link href="/login">
                  <Button>Log in</Button>
                </Link>
              </Grid>
              <Grid item xs={9}>
                <Typography>Main content</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </main>
  );
}
