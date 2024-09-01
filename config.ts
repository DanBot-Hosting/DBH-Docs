import {
  WatsonHealth3DCurveManual,
  Book,
  Portfolio,
  Terminal,
  BareMetalServer,
  UserMultiple,
} from "@carbon/icons-react";

// Don't add a trailing slash to the hrefs
// The active link is determined by the current path
// If the current path is the same as the href, it is active
// Else if you add a trailing slash, it will never be active
// Until clicked on
export const navLinks: Link[] = [
  {
    label: "Introduction",
    icon: WatsonHealth3DCurveManual,
    link: "/introduction",
  },
  { label: "Getting Started", icon: Book, link: "/getting-started" },
  //{ label: "Staff List", icon: Portfolio, link: "/staff-list" },
  {
    label: "Beginner's Guidebook",
    icon: UserMultiple,
    links: [
      { label: "Proxying", link: "/beginner/proxying" },
      { label: "Ticket System", link: "/beginner/tickets" },
    ],
  },
  {
    label: "Advanced Management",
    icon: Terminal,
    links: [
      { label: "SFTP Using VSCode", link: "/advanced/vscode-sftp" },
      { label: "ShareX Setup", link: "/advanced/sharex-setup" },
    ],
  },
  {
    label: "Server Guides",
    icon: BareMetalServer,
    links: [
      { label: "Server Creation", link: "/server/create" },

      { label: "Databases", title: true },
      { label: "MongoDB", link: "/server/database/mongodb" },
      { label: "Postgres", link: "/server/database/postgres" },
      { label: "Redis", link: "/server/database/redis" },
      { label: "MariaDB", link: "/server/database/mariadb" },
      //{ label: "InfluxDB", link: "/server/database/influxdb" },

      { label: "Development", title: true },
      { label: "All In One (AIO)", link: "/server/development/aio" },
      { label: "Node.js", link: "/server/development/nodejs" },
      { label: "Bun", link: "/server/development/bun" },
      { label: "Python", link: "/server/development/python" },
      { label: "Java", link: "/server/development/java" },
      { label: "Rust", link: "/server/development/Rust" },

      { label: "Premade Bots", title: true },
      { label: "Red Discord Bot", link: "/server/development/rdb" },

      { label: "Minecraft", title: true },
      { label: "Forge", link: "/server/minecraft/forge" },
      { label: "Paper", link: "/server/minecraft/paper" },
      { label: "Bedrock", link: "/server/minecraft/bedrock" },
      { label: "Pocketmine MP", link: "/server/minecraft/pocketmine" },
      { label: "Waterfall", link: "/server/minecraft/waterfall" },
      { label: "Spigot", link: "/server/minecraft/spigot" },

      { label: "Software", title: true },
      { label: "Code Server", link: "/server/development/code-server" },
      { label: "Gitea", link: "/server/software/gitea" },
      { label: "Grafana", link: "/server/development/grafana" },
      { label: "Haste", link: "/server/software/haste" },
      { label: "RabbitMQ", link: "/server/database/rabbitmq" },
      { label: "ShareX", link: "/server/software/sharex" },
      { label: "Uptime Kuma", link: "/server/development/uptimekuma" },

      { label: "Voice Servers", title: true },
      { label: "Mumble", link: "/server/voice-server/mumble" },
      { label: "TeamSpeak 3", link: "/server/voice-server/teamspeak3" },

      { label: "Web Hosting", title: true },
      { label: "Nginx", link: "/server/web-hosting/nginx" },
    ],
  },
];
