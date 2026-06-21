import type { Metadata } from "next";
import { GetRightBaselinePage } from "@/components/get-right-baseline-page";

export const metadata: Metadata = {
  title: "Catalog | GET RIGHT",
  description: "Explore the digital products and services GET RIGHT can build with you.",
};

export default function CatalogPage() {
  return (
    <GetRightBaselinePage
      eyebrow="Catalog"
      heading="Explore what we can build together."
      body="Our digital service catalog is being organized and will be available here soon."
      showServices
    />
  );
}
