import type { Metadata } from "next";
import { CinematicIntro } from "@/components/cinematic-intro";

export const metadata: Metadata = {
  title: "REDGHY",
  description: "REDGHY — strategy, design, and digital experiences.",
};

export default function Home() {
  return <CinematicIntro />;
}
