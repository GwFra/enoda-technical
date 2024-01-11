import React from "react";
import styles from "./page.module.css";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Header from "../components/header";

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
          <Grid item xs={1} style={{ padding: "32px 64px 0px" }}>
            <div>
              <Typography>Breadcrumbs</Typography>
              <div style={{ borderBottom: "2px rgba(0,0,0,.5) solid" }}></div>
            </div>
          </Grid>
          <Grid
            item
            xs={10}
            style={{ padding: "16px 64px 0px", height: "100%" }}
          >
            <Grid container spacing={2} style={{ height: "100%" }}>
              <Grid
                item
                xs={3}
                style={{ borderRight: "2px rgba(0,0,0,.5) solid" }}
              >
                <Typography>Left side</Typography>
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
