import type { Metadata } from "next";
import { GetRightServicePage } from "@/components/get-right-service-page";

export const metadata: Metadata = {
  title: "App Development | GET RIGHT",
  description: "Scalable mobile and web applications built with thoughtful design and reliable engineering.",
};

export default function AppDevelopmentPage() {
  return <GetRightServicePage kind="app-development" />;
}
