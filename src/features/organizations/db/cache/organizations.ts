import { getGlobalTag, getIdTag } from "@/services/clerk/lib/dataCache";
import { revalidateTag } from "next/cache";

export function getOrganizationGlobalTag() {
  return getGlobalTag("organizations");
}

export function getOrganizationIdTag(id: string) {
  return getIdTag("organizations", id);
}

export function revalidateOrganizationCache(id: string) {
  revalidateTag(getOrganizationGlobalTag());
  revalidateTag(getOrganizationIdTag(id));
}
