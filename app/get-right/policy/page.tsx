import type { Metadata } from "next";
import { GetRightPolicyHub } from "@/components/get-right-policy-hub";

export const metadata: Metadata = {
  title: "Policy | GET RIGHT",
  description: "Privacy, service, and engagement policies for GET RIGHT products and businesses.",
};

export default function PolicyPage() {
  return <GetRightPolicyHub />;
}
