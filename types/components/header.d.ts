interface Sublink { label: string; link: string }

interface Link {
  icon: import("@tabler/icons").TablerIcon;
  label: string;
  initiallyOpened?: boolean;
  links?: Sublink[];
};