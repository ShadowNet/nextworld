import type { Metadata } from "next";
import { GetRightBaselinePage } from "@/components/get-right-baseline-page";

export const metadata: Metadata = {
  title: "Policy | GET RIGHT",
  description: "GET RIGHT service, privacy, and engagement policies.",
};

export default function PolicyPage() {
  return (
    <GetRightBaselinePage
      eyebrow="Policy"
      heading="Clear policies. Straightforward expectations."
      body="Our detailed service, privacy, and engagement policies are being prepared and will be available here soon."
    />
  );
}
