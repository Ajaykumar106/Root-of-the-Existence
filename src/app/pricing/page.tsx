import { Metadata } from "next";
import PricingClient from "./PricingClient";

export const metadata: Metadata = {
  title: "Subscription Plans | Root of Existence",
  description: "Unlock the universe with our premium subscription plans. Gain full access to the encyclopedia, interactive solar system, and advanced AI research tools.",
  openGraph: {
    title: "Subscription Plans | Root of Existence",
    description: "Unlock the universe with our premium subscription plans.",
    url: "https://root-of-the-existence.vercel.app/pricing",
  }
};

export default function PricingPage() {
  return <PricingClient />;
}
