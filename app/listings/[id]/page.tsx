"use client";

import ListingPreview from "@/app/ui/listings/preview";
import { usePathname } from "next/navigation";

const mockListing = {
  id: 1,
  title: "This is the first listing",
  quantity: 50,
  price: 1000,
  start: Date.now() + 20000,
  end: Date.now() + 30000,
};

export default function Page({ params }: { params: { id: number } }) {
  // listing id
  const { id } = params;
  console.log(id);
  return <ListingPreview {...mockListing} />;
}
