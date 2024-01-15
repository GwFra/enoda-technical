"use client";

import { Breadcrumbs, Typography } from "@mui/material";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navigation() {
  const path = usePathname();
  const links = path.split("/");
  links.shift(); // remove initial " " found at the start of the path
  const linkCrumbs = links.map((page, index) => {
    const prevLink = path.split(page)[0];
    return (
      <Link key={index} href={`${prevLink === "/" ? "" : prevLink}/${page}`}>
        <Typography variant="h5">
          {page[0]?.toUpperCase() + page.slice(1)}
        </Typography>
      </Link>
    );
  });
  return (
    <div
      style={{
        backgroundColor: "#00000014",
        borderRadius: "12px",
        display: "flex",
        paddingTop: 0,
        paddingLeft: 16,
        alignItems: "center",
        height: "100%",
      }}
    >
      {path.includes("/login") ? (
        <></>
      ) : (
        <Breadcrumbs>{linkCrumbs}</Breadcrumbs>
      )}
    </div>
  );
}
