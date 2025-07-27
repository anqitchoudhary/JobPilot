// app/(main)/dashboard/page.jsx

import { getIndustryInsights } from "@/actions/dashboard";
import { getUserOnboardingStatus } from "@/actions/user";
import { redirect } from "next/navigation";
import DashboardView from "./_components/dashboard-view";

const IndustryInsightsPage = async () => {
  // First, check if the user is onboarded
  const { isOnboarded } = await getUserOnboardingStatus();

  // If they are NOT onboarded, redirect them IMMEDIATELY.
  if (!isOnboarded) {
    redirect("/onboarding");
  }

  // This line will now ONLY run if the user IS onboarded, preventing the error.
  const insights = await getIndustryInsights();

  return (
    <div className="container mx-auto">
      <DashboardView insights={insights} />
    </div>
  );
};

export default IndustryInsightsPage;
