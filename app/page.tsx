import ListingContainer from "@/app/ui/listings/container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Link from "next/link";

const listings = [
  {
    id: 1,
    title: "This is the first listing",
    quantity: 50,
    price: 1000,
    start: Date.now() + 20000,
    end: Date.now() + 30000,
  },
  {
    id: 2,
    title: "This is the second listing",
    quantity: 50,
    price: 1000,
    start: Date.now() + 20000,
    end: Date.now() + 30000,
  },
  {
    id: 3,
    title: "This is the third listing",
    quantity: 50,
    price: 1000,
    start: Date.now() + 20000,
    end: Date.now() + 30000,
  },
];

export default function Home() {
  return (
    <Grid container spacing={2} style={{ height: "100%" }}>
      <Grid item xs={3}>
        <p>
          <Typography>Left side</Typography>
          This is where you need to login to see all the electricty being sold
        </p>
        <Link href="/login">
          <Button>Log in</Button>
        </Link>
      </Grid>
      <Grid item xs={9}>
        <Typography>Main content</Typography>
        <ListingContainer listings={listings} />
      </Grid>
    </Grid>
  );
}
