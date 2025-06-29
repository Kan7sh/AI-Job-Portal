import { UserNotificationSettingsTable, UserTable } from "@/drizzle/schema";
import { db } from "@/drizzle/db";
import { revalidateUserNotificationSettingsCache } from "./cache/userNotificationSettings";
export async function insertUserNotificationSettings(
  settings: typeof UserNotificationSettingsTable.$inferInsert
) {
  await db
    .insert(UserNotificationSettingsTable)
    .values(settings)
    .onConflictDoNothing();

  revalidateUserNotificationSettingsCache(settings.userId);
}
