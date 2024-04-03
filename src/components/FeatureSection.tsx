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
  CatalogOption,
  Cloud,
  Info,
  Integration,
  Network,
  Notification,
  Wifi,
} from "grommet-icons";

type Props = {
  name: string
  action: string
  children: ReactNode
  summary: ReactNode
  backgroundUrl: string
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

const FeatureContent = ({ action, children, name, summary, backgroundUrl, ...rest }: Props) => (
  <Box align="center" margin="medium" direction="row" {...rest}>
    <Stack anchor="center" margin="small">
      <Box
        height="small"
        width="small"
        round="medium"
        background={{ image: `url(${backgroundUrl})`, size: "cover" }}
      />
      {children}
    </Stack>
    <Box width="small" margin={{ left: "small" }}>
      <Heading level={2} size="small" margin="none" overflowWrap="normal">
        {name}
      </Heading>
      <Paragraph>{summary}</Paragraph>
      {/*<Anchor href="/">{action}</Anchor>*/}
    </Box>
  </Box>
);

export const FeatureSection = ({ ...rest }) => (
  <Box align="center" pad="large">
    <Heading size="large" margin={{ top: "medium", bottom: "small"}}>
      Full Feature Set
    </Heading>
    <Paragraph size="xlarge" textAlign="center">
      Wavelength is still in the prototype phase, and some of the following features are still in development
    </Paragraph>
    <Box
      direction="row-responsive"
      align="center"
      justify="center"
      margin={{top: "medium"}}
      wrap={true}
      {...rest}
    >
      <FeatureContent
        name="Standard Doorbell Functionality"
        summary="Here at Wavelength we strive to do the basics well"
        action="gestures"
        backgroundUrl="/test-feature-1.jpeg"
      >
        <Notification size="xlarge" color="white" />
      </FeatureContent>
      <FeatureContent
        name="AI Powered Tenant Managment"
        summary="Reduce the burden of tenant management by letting Wavelength handle it"
        action="navigate"
        backgroundUrl="/test-feature-2.jpeg"
      >
        <Info size="xlarge" color="white" />
      </FeatureContent>
    </Box>
    <Box direction="row-responsive" align="center" margin={{top: "medium"}} wrap={true} {...rest}>
      <FeatureContent
        name="Fully Wireless Lock Network"
        summary="Easily retrofit all your building's locks"
        action="navigate"
        backgroundUrl="/test-feature-3.jpg"
      >
        <Wifi size="xlarge" color="white" />
      </FeatureContent>
      <FeatureContent
        name="Ingress and egress logging"
        summary="All door action are logged and locally stored forever on your device"
        action="navigate"
        backgroundUrl="/test-feature-4.jpg"
      >
        <CatalogOption size="xlarge" color="white" />
      </FeatureContent>
    </Box>
    <Box direction="row-responsive" align="center" margin={{top: "medium"}} wrap={true} {...rest}>
      <FeatureContent
        name="Customizable Network Access"
        summary="Can be configued to operate wirelessly or wired and with or without network access"
        action="navigate"
        backgroundUrl="/test-feature-5.jpeg"
      >
        <Network size="xlarge" color="white" />
      </FeatureContent>
      <FeatureContent
        name="Sharable Temporary Access Codes "
        summary="Create codes for deliveries, guests, or other service providers"
        action="navigate"
        backgroundUrl="/test-feature-6.jpeg"
      >
        <Accessibility size="xlarge" color="white" />
      </FeatureContent>
    </Box>
    <Box direction="row-responsive" align="center" margin={{top: "medium"}} wrap={true} {...rest}>
      <FeatureContent
        name="Cloud Hosting Compatible"
        summary="You get to choose where your data lives"
        action="navigate"
        backgroundUrl="/test-feature-7.jpeg"
      >
        <Cloud size="xlarge" color="white" />
      </FeatureContent>
      <FeatureContent
        name="Seamless Integration"
        summary="Wavelength is built to support 3rd party integrations like security systems or smart door locks"
        action="navigate"
        backgroundUrl="/test-feature-8.jpeg"
      >
        <Integration size="xlarge" color="white" />
      </FeatureContent>
    </Box>
  </Box>
);
