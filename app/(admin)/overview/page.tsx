import { Metadata } from "next";

import { OverviewData } from "@/app/(admin)/overview/overview";

export const metadata: Metadata = {
  title: "Overview",
};

const Overview = () => {
  return <OverviewData />;
};

export default Overview;
