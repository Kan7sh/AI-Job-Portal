import { getGlobalTag, getIdTag, getOrganizationTag } from "@/lib/dataCache";
import { revalidateTag } from "next/cache";

export function getJobListingsGlobalTag() {
  return getGlobalTag("jobListings");
}

export function getJobListingsOrganizationTag(organizationId: string) {
  return getOrganizationTag("jobListings", organizationId);
}

export function getJobListingsIdTag(id: string) {
  return getIdTag("jobListings", id);
}

export function revalidateJobListingsCache({
  id,
  organizationId,
}: {
  id: string;
  organizationId: string;
}) {
  revalidateTag(getJobListingsGlobalTag());
  revalidateTag(getJobListingsOrganizationTag(organizationId));
  revalidateTag(getJobListingsIdTag(id));
}
