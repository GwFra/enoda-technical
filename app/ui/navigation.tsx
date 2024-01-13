"use client";

import { Breadcrumbs } from "@mui/material";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navigation() {
  const path = usePathname();
  console.log(path);
  const links = path.split("/");
  console.log(links);
  // const hrefLinks = links.map((step, index, arr) => `/${links[0]}`)
  // const crumbs = links.map((step, index) => {
  //   <Link href={``}></Link>
  // });
  return (
    <div>
      <Breadcrumbs>
        <Link href="/">Home</Link>
        <Link href="/listings">Listing</Link>
      </Breadcrumbs>
    </div>
  );
}
