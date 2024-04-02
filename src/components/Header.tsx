import { useContext } from "react";
import {
  Anchor,
  Box,
  Button,
  Collapsible,
  Header as GrommetHeader,
  Heading,
  Image,
  Layer,
  Menu,
  Text,
  ResponsiveContext,
} from "grommet";
import { Menu as MenuIcon } from "grommet-icons";

export const Header = () => {
  const size = useContext(ResponsiveContext);

  return (
    <GrommetHeader
      pad="small"
      background="background"
      sticky="scrollup"
    >
      <Anchor
        href="/"
        // icon={}
        color="white"
        margin={{ left: "small" }}
      >
        <Box height="xxsmall">
          <Image
            src="/wavelength-logo-v0.0.2.png"
            alt="Wavelength Logo"
            fill="vertical"
          />
        </Box>
      </Anchor>
      {size === "small" ? (
        <Box justify="end">
          <Menu
            a11yTitle="Navigation Menu"
            dropProps={{ align: { top: "bottom", right: "right" } }}
            icon={<MenuIcon color="brand" />}
            items={[
              {
                label: <Box pad="small">Request a Demo</Box>,
                href: "#request-demo",
              },
              {
                label: <Box pad="small">Blog</Box>,
                href: "/",
              },
            ]}
          />
        </Box>
      ) : (
        <Box justify="end" direction="row" gap="medium">
          <Box direction="row" gap="small">
            <Button label="Request a Demo" href="#request-demo" />
            <Button label="Blog" href="/" />
          </Box>
        </Box>
      )}
    </GrommetHeader>
  );
};
