"use client";
import { useIsDarkMode } from "@/hooks/useIsDarkMode";
import { ClerkProvider as OriginalProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Suspense } from "react";
export function ClerkProvider({ children }: { children: React.ReactNode }) {
  const isDarkMode = useIsDarkMode();

  return (
    <Suspense>
      <OriginalProvider
        appearance={isDarkMode ? { baseTheme: [dark] } : undefined}
      >
        {children}
      </OriginalProvider>
    </Suspense>
  );
}
