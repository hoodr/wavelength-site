import { ReactNode } from "react";
import { Box } from "grommet";

type Props = {
  width: string
  children: ReactNode
}

export const Section = ({ children, width, ...rest }: Props) => (
  <Box align="center" pad="large" {...rest}>
    <Box width={width}>{children}</Box>
  </Box>
);
