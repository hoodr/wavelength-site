import { ReactNode } from "react";
import { Anchor, Box, Paragraph, BoxExtendedProps } from "grommet";
import { Beacon, Key, Webcam, Wifi } from "grommet-icons";

const data = [
  "RFID and Phone as a key enabled for maximum access flexibility",
  "Integrated video intercom system for two way video calls and entrance way motion tracking",
  "Simple, secure, and easy to configure access control roles and rules"
];

type Props = BoxExtendedProps & {
  action: string
  children: ReactNode
  summary: ReactNode
}

const Tile = ({ children, action, summary, ...rest }: Props) => (
  <Box basis="medium" align="center" margin="medium">
    <Box height="xsmall" align="center" justify="center" {...rest}>
      {children}
    </Box>
    <Paragraph size="large" textAlign="center">
      {summary}
    </Paragraph>
    <Box align="center">
      <Anchor href="/" alignSelf="center">
        {action}
      </Anchor>
    </Box>
  </Box>
);

export const Features = ({ ...rest }) => (
  <Box
    direction="row-responsive"
    justify="center"
    align="center"
    //margin={{ top: "xlarge" }}
    background="background-contrast"
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
);
