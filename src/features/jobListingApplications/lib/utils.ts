import { applicationStage } from "@/drizzle/schema"

export function sortApplicationsByStage(
  a: applicationStage,
  b: applicationStage
): number {
  return APPLICATION_STAGE_SORT_ORDER[a] - APPLICATION_STAGE_SORT_ORDER[b]
}

const APPLICATION_STAGE_SORT_ORDER: Record<applicationStage, number> = {
  applied: 0,
  interested: 1,
  interviewed: 2,
  hired: 3,
  denied: 4,
}