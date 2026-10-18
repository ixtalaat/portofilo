"use client";

import { SpeedInsights as SpeedInsightsScript } from "@vercel/speed-insights/react";
import { usePathname } from "next/navigation";

export default function SpeedInsights() {
  const pathname = usePathname();
  return <SpeedInsightsScript route={pathname} />;
}
