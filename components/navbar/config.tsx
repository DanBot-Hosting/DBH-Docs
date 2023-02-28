import {
  IconCookie,
  IconDoor,
  IconBook2,
  IconAppWindow,
  IconClock,
  IconServerCog,
  IconUsers
} from "@tabler/icons";

// Don't add a trailing slash to the hrefs
// The active link is determined by the current path
// If the current path is the same as the href, it is active
// Else if you add a trailing slash, it will never be active
// Until clicked on
export const navLinks = [
  { label: 'Introduction', icon: IconDoor, link: "/dash" },
  { label: 'Getting Started', icon: IconBook2, link: "/" },
  { label: 'Credits', icon: IconCookie, link: "/" },
  {
    label: 'Beginner\'s Guidebook',
    icon: IconUsers,
    links: [
      { label: 'Creating A Bot', link: '/' },
      { label: 'Proxying', link: '/' },
      { label: 'Ticket System', link: '/' },
      { label: 'Wordpress', link: '/' },
    ],
  },
  {
    label: 'Advanced Management',
    icon: IconAppWindow,
    links: [
    ],
  },
  {
    label: 'Timeline',
    icon: IconClock,
    links: [
    ],
  },
  {
    label: 'Server Guides',
    icon: IconServerCog,
    links: [
    ],
  },
];