interface Sublink {
  label: string;
  link?: string;
  title?: boolean;
  description?: boolean;
}

interface Link {
  icon: import("@carbon/icons-react").CarbonIconType;
  label: string;
  description?: boolean;
  initiallyOpened?: boolean;
  link?: string;
  links?: Sublink[];
};