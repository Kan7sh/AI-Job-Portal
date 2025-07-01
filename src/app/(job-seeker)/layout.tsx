import AppSidebar from "@/components/sidebar/AppSidebar";
import SidebarNavMenuGroup from "@/components/sidebar/SidebarNavMenuGroup";

import { SidebarUserButton } from "@/features/users/components/SidebarUserButton";
import {
  BrainCircuitIcon,
  ClipboardListIcon,
  Link,
  LogInIcon,
} from "lucide-react";
import { ReactNode } from "react";

export default function JobSeekerLayout({
  children,
  sidebar,
}: {
  children: ReactNode;
  sidebar: ReactNode;
}) {
  return (
    <AppSidebar
      footerButton={<SidebarUserButton />}
      content={
        <>
          {sidebar}
          <SidebarNavMenuGroup
            className="mt-auto"
            items={[
              { href: "/", icon: <ClipboardListIcon />, label: "Job Board" },
              {
                href: "/ai-search",
                icon: <BrainCircuitIcon />,
                label: "AI Search",
              },
              {
                href: "/employer",
                icon: <ClipboardListIcon />,
                label: "Employer Dashboard",
                authStatus: "signedIn",
              },
              {
                href: "/sign-in",
                icon: <LogInIcon />,
                label: "Sign In",
                authStatus: "signedOut",
              },
            ]}
          />
        </>
      }
    >
      {children}
    </AppSidebar>
  );
}
