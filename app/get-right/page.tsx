import type { Metadata } from "next";
import { GetRightPage } from "@/components/get-right-page";

export const metadata: Metadata = {
  title: "GET RIGHT | Premium Digital Solutions",
  description:
    "Consultation, app development, and customer experiences designed to create measurable business results.",
};

export default function Page() {
  return <GetRightPage />;
}
