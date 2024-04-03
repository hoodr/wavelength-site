import { ReactNode } from "react";
import { Box, Heading, Paragraph, BoxExtendedProps } from "grommet";
import { Beacon, Key, Webcam } from "grommet-icons";

const data = [
  "RFID and Phone as a key enabled for maximum access flexibility",
  "Integrated camera for two way video calls and entrance way security",
  "Simple, secure, and easy to configure access control roles and rules"
];

type Props = BoxExtendedProps & {
  action: string
  children: ReactNode
  summary: ReactNode
}

// TODO: Link Features to specific pages
//
// <Box align="center">
//   <Anchor href="/" alignSelf="center">
//     {action}
//   </Anchor>
// </Box>

const Tile = ({ children, action, summary, ...rest }: Props) => (
  <Box align="center" margin="medium">
    <Box height="xsmall" align="center" justify="center" {...rest}>
      {children}
    </Box>
    <Paragraph size="large" textAlign="center">
      {summary}
    </Paragraph>
  </Box>
);

export const Features = ({ ...rest }) => (
  <Box
    align="center"
    background="background-contrast"
  >
    <Heading>Core Features</Heading>
    <Box
      direction="row-responsive"
      justify="center"
      align="center"
      flex="shrink"
      alignContent="center"
      width="xlarge"
      {...rest}
    >
      <Tile direction="row" action="find out more" summary={data[0]}>
        <Beacon size="large" />
      </Tile>
      <Tile direction="row" action="find out more" summary={data[1]}>
        <Webcam size="large" />
      </Tile>
      <Tile direction="row" action="find out more" summary={data[2]}>
        <Key size="large" />
      </Tile>
    </Box>
  </Box>
);
