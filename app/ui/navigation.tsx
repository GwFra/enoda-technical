"use client";

import { Breadcrumbs } from "@mui/material";
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
        {page === "/" ? "" : page[0]?.toUpperCase() + page.slice(1)}
      </Link>
    );
  });
  return (
    <div>
      {path.includes("/login") ? (
        <></>
      ) : (
        <Breadcrumbs>{linkCrumbs}</Breadcrumbs>
      )}
    </div>
  );
}
