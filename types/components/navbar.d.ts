interface Sublink {
  label: string;
  link?: string;
  title?: boolean;
}

interface Link {
  icon: import("@carbon/icons-react").CarbonIconType;
  label: string;
  initiallyOpened?: boolean;
  link?: string;
  links?: Sublink[];
};