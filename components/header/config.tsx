import {
  IconGauge,
  IconDeviceDesktopAnalytics,
  IconSettings,
  IconPlug,
  IconPalette,
  IconPhoto,
  IconLayersSubtract,
  IconTool,
  IconLogout,
} from "@tabler/icons";

export const navLinks: Link[] = [
  {
    icon: IconGauge,
    label: "Dashboard",
    links: [
      { label: "Overview", link: "/dashboard" },
      { label: "Change Log", link: "/dashboard/change-log" },
      { label: "Support", link: "/dashboard/support" },
    ],
  },
  {
    icon: IconDeviceDesktopAnalytics,
    label: "Analytics",
    links: [
      { label: "Traffic", link: "/analytics" },
      { label: "Performance", link: "/analytics/performance" },
      { label: "Security", link: "/analytics/security" },
      { label: "Health", link: "/analytics/health" },
    ],
  },
  {
    icon: IconLayersSubtract,
    label: "Pages",
    links: [
      { label: "Overview", link: "/pages" },
      { label: "Create", link: "/pages/create" },
      { label: "Delete", link: "/pages/delete" },
    ],
  },
  {
    icon: IconTool,
    label: "System",
    links: [
      { label: "Routing", link: "/system" },
      { label: "Invocation", link: "/system/invocation" },
      { label: "Activity", link: "/system/activity" },
    ],
  },
  {
    icon: IconPhoto,
    label: "Media",
    links: [
      { label: "Overview", link: "/media" },
      { label: "Upload", link: "/media/upload" }
    ],
  },
  {
    icon: IconPlug,
    label: "Plugins",
    links: [
      { label: "Overview", link: "/plugins" },
      { label: "Manage", link: "/plugins/manage" },
      { label: "Logging", link: "/plugins/logger" },
      { label: "Help", link: "/themes/help" },
    ],
  },
  {
    icon: IconPalette,
    label: "Themes",
    links: [
      { label: "Overview", link: "/themes" },
      { label: "Upload", link: "/themes/upload" },
      { label: "Inspect", link: "/themes/inspect" },
      { label: "Modify", link: "/themes/modify" },
      { label: "Help", link: "/themes/help" },
    ],
  }
];

export const accountMenuOptions = [
  { label: "Logout", link: "/auth/logout", icon: <IconLogout stroke={2} /> },
];