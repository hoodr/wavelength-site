import { ReactNode } from "react";
import {
  Anchor,
  Box,
  Heading,
  Paragraph,
  Stack,
} from "grommet";
import {
  Accessibility,
  Beacon,
  CatalogOption,
  Key,
  Webcam,
  Wifi,
} from "grommet-icons";

type Props = {
  name: string
  action: string
  children: ReactNode
  summary: ReactNode
}

/*
<Stack anchor="center">
      <Box direction="row">
        <Box
          width="small"
          height="medium"
          round="medium"
          background="light-4"
        />
        <Box background="white" width="xxsmall" />
      </Box>
      <Box>{children}</Box>
    </Stack>
*/

const FeatureContent = ({ action, children, name, summary, ...rest }: Props) => (
  <Box align="center" margin="medium" direction="row" {...rest}>
    <Stack anchor="center">
      {children}
    </Stack>
    <Box width="small" margin={{ left: "small" }}>
      <Heading level={1} size="small" margin="none" overflowWrap="normal">
        {name}
      </Heading>
      <Paragraph>{summary}</Paragraph>
      <Anchor href="/">{action}</Anchor>
    </Box>
  </Box>
);

export const FeatureSection = ({ ...rest }) => (
  <Box align="center" pad="large">
    <Heading size="large">Core Features</Heading>
    <Paragraph size="xlarge" textAlign="center">
      Although Wavelength is still in the prototype phase, the following features are core to the system
    </Paragraph>
    <Box direction="row-responsive" align="center" margin="medium" wrap={true} {...rest}>
      <FeatureContent
        name="RFID and Phone as a key"
        summary="swipe up for up voting and down for down vote"
        action="gestures"
      >
        <Box
          height="medium"
          width="small"
          round="medium"
          background={{ image:"url(/test-feature-1.jpeg)", size: "cover" }}
        />
        <Beacon size="xlarge" color="white" />
      </FeatureContent>
      <FeatureContent
        name="Integrated video intercom"
        summary="quickly move back and forth through the queue"
        action="navigate"
      >
        <Box
          height="medium"
          width="small"
          round="medium"
          background={{ image:"url(/test-feature-2.jpeg)", size: "cover" }}
        />
        <Webcam size="xlarge" color="white" />
      </FeatureContent>
    </Box>
    <Box direction="row-responsive" align="center" margin="medium" wrap={true} {...rest}>
      <FeatureContent
        name="Simple and secure access control and tenant management"
        summary="quickly move back and forth through the queue"
        action="navigate"
      >
        <Box
          height="medium"
          width="small"
          round="medium"
          background={{ image:"url(/test-feature-3.jpg)", size: "cover" }}
        />
        <Key size="xlarge" color="white" />
      </FeatureContent>
      <FeatureContent
        name="Ingress and egress audit logging"
        summary="All door action are logged and locally stored forever on your device"
        action="navigate"
      >
        <Box
          height="medium"
          width="small"
          round="medium"
          background={{ image:"url(/test-feature-4.jpg)", size: "cover" }}
        />
        <CatalogOption size="xlarge" color="white" />
      </FeatureContent>
    </Box>
    <Box direction="row-responsive" align="center" margin="large" wrap={true} {...rest}>
      <FeatureContent
        name="Fully customizable network access"
        summary="Can be configued to operate wirelessly or wired and with or without network access"
        action="navigate"
      >
        <Box
          height="medium"
          width="small"
          round="medium"
          background={{ image:"url(/test-feature-5.jpeg)", size: "cover" }}
        />
        <Wifi size="xlarge" color="white" />
      </FeatureContent>
      <FeatureContent
        name="Sharable temporary access codes "
        summary="Create codes for deliveries, guests, or other service providers"
        action="navigate"
      >
        <Box
          height="medium"
          width="small"
          round="medium"
          background={{ image:"url(/test-feature-6.jpeg)", size: "cover" }}
        />
        <Accessibility size="xlarge" color="white" />
      </FeatureContent>
    </Box>
  </Box>
);
