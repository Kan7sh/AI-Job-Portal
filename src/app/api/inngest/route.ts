import { inngest } from "@/services/inngest/client";
import {
  clerkCreateUser,
  clerkDeleteOrganization,
  clerkDeleteUser,
  clerkOrganizationUser,
  clerkUpdateOrganization,
  clerkUpdateUser,
} from "@/services/inngest/functions/clerk";
import { rankApplication } from "@/services/inngest/functions/jobListingApplications";
import { createAiSummaryOfUploadedResume } from "@/services/inngest/functions/resume";
import { serve } from "inngest/next";

// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    clerkCreateUser,
    clerkUpdateUser,
    clerkDeleteUser,
    clerkOrganizationUser,
    clerkUpdateOrganization,
    clerkDeleteOrganization,
    createAiSummaryOfUploadedResume,
    rankApplication,
  ],
});
