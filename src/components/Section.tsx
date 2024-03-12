import { Box } from "grommet";

export const Section = ({ children, width, ...rest }) => (
  <Box align="center" pad="large" {...rest}>
    <Box width={width}>{children}</Box>
  </Box>
);
