import type { Metadata } from "next";
import { GetRightServicePage } from "@/components/get-right-service-page";

export const metadata: Metadata = {
  title: "Customer Experience | GET RIGHT",
  description: "Customer journeys improved through research, strategy, thoughtful design, and continuous optimization.",
};

export default function CustomerExperiencePage() {
  return <GetRightServicePage kind="customer-experience" />;
}
