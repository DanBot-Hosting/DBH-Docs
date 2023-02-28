interface LinksGroupProps {
  icon: import("@tabler/icons").TablerIcon;
  label: string;
  initiallyOpened?: boolean;
  link: string;
  links?: { label: string; link: string }[];
}