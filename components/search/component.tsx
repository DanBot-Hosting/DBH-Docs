import { useStyles } from "./styles";
import type { FunctionComponent, ReactElement } from "react";
import { hint } from "./config";
import { Button, Paper, Text, Group, CloseButton, Input, InputProps, Kbd } from "@mantine/core";
import { Search as CarbonSearch } from "@carbon/icons-react";

export const Search: FunctionComponent<InputProps> = (props): ReactElement => {
  const { classes } = useStyles();

  return (
    <Input
      icon={<CarbonSearch />}
      rightSection={<Kbd>/</Kbd>}
      placeholder="Search"
      component="button"
      pointer
      {...props}
    >
      <Input.Placeholder>{hint}</Input.Placeholder>
    </Input>
  );
}
