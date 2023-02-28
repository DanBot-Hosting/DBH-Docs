interface TrafficStatistics {
  title: string;
  value: string;
  comparedTo: "yesterday" | "all time";
  diff: number;
}