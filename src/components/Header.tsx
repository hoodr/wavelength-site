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
    <GrommetHeader margin="medium" height="xsmall" sticky="scrollup">
      <Anchor
        href="/"
        icon={<Image
              src="/wavelength-logo-v0.0.2.png"
              alt="Wavelength Logo"
              //width={120}
              height={96}
            />
        }
        color="white"
      />
      {size === "small" ? (
        <Box justify="end">
          <Menu
            a11yTitle="Navigation Menu"
            dropProps={{ align: { top: "bottom", right: "right" } }}
            icon={<MenuIcon color="brand" />}
            items={[
              {
                label: <Box pad="small">Docs</Box>,
                href: "/",
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
            <Button label="Docs" href="/" />
            <Button label="Blog" href="/" />
          </Box>
        </Box>
      )}
    </GrommetHeader>
  );
};
