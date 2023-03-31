interface Sublink {
  label: string;
  link?: string;
  title?: boolean;
  description?: string;
}

interface Link {
  icon: import("@carbon/icons-react").CarbonIconType;
  label: string;
  description?: string;
  initiallyOpened?: boolean;
  link?: string;
  links?: Sublink[];

  onSwitch?: () => void;
};
