import { Metadata } from "next";
import LiveClient from "./LiveClient";

export const metadata: Metadata = {
  title: "Live Telemetry | Root of Existence",
  description: "Real-time cosmic data. View the NASA Astronomy Picture of the Day and live upcoming global rocket launch schedules.",
};

export default function LivePage() {
  return <LiveClient />;
}
