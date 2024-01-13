import ListingPreview from "@/app/ui/listings/preview";

const mockListing = {
  id: 1,
  title: "This is the first listing",
  quantity: 50,
  price: 1000,
  timing: {
    startDate: Date.now() + 20000,
    endDate: Date.now() + 30000,
  },
};

export default function Page({ params }: { params: { id: number } }) {
  // listing id
  const { id } = params;
  console.log(id);
  return <ListingPreview {...mockListing} />;
}
