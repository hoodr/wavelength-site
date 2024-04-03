import { useContext } from "react";
import {
  Anchor,
  Box,
  Footer,
  ResponsiveContext,
  Text,
  Image
} from "grommet";

const data = [
  ["App", "home", "beta", "sponsors"],
  ["Legal", "terms", "privacy", "security"],
  ["Company", "about", "press", "jobs"],
];

const FooterContent = () => {
  const size = useContext(ResponsiveContext);

  return (
    <Box
      direction="row"
      gap={size !== "xsmall" && size !== "small" ? "xlarge" : "small"}
    >
      {data.map((item) => (
        <Box gap="medium" key={item[0]}>
          <Text color="brand" weight="bold" size="small">
            {item[0]}
          </Text>
          <Box>
            {[1, 2, 3].map((i) => (
              <Anchor
                key={i}
                href={`/${item[i]}`}
                size="small"
                color="black"
                margin={{top: "small"}}
                label={item[i]}
              />
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export const SitemapFooter = () => {
  const size = useContext(ResponsiveContext);

  return (
    <Box>
      {size === "small" ? (
        // TODO: add mobile menu here
        <Footer background="light-4" pad="large">
          <Box direction="row-responsive" gap="xsmall">
            <Box align="center" gap="small">
              <Anchor
                href="/"
                icon={<Image
                      src="/wavelength-logo-v0.0.2.png"
                      alt="Wavelength Logo"
                      width={100}
                      height={48}
                    />
                }
                color="white"
              />
            </Box>
          </Box>
          {FooterContent()}
        </Footer>
      ) : (
        <Footer background="light-4" pad="large">
          <Box direction="row-responsive" gap="xsmall">
            <Box align="center" gap="small">
              <Anchor
                href="/"
                icon={<Image
                        src="/wavelength-logo-v0.0.2.png"
                        alt="Wavelength Logo"
                        width={120}
                        height={72}
                      />}
                color="white"
              />
            </Box>
          </Box>
          {FooterContent()}
        </Footer>
      )}
    </Box>
  );
};

export const Footer2 = ({ ...rest }) => {
  const size = useContext(ResponsiveContext);

  return(
    <Box>
      <Box
        direction="row"
        justify="between"
        border={{ side: "top", color: "light-4" }}
        pad={{ top: "large" }}
        {...rest}
      >
        <Box gap="large" align="start">
          <Box
            gap="small"
            direction="row-responsive"
            align="center"
            pad={{ horizontal: "small" }}
          >
            {/* <Logo />*/}
            <Anchor
              href="/"
              icon={<Image
                      src="/wavelength-logo-v0.0.2.png"
                      alt="Wavelength Logo"
                      height={72}
                    />}
              color="white"
            />
          </Box>
        </Box>
        <FooterContent />
      </Box>
      <Box
        margin={{top: "medium" }}
        direction="row"
        justify="between"
      >
        <Text size="xsmall">©️  2024, Wavelength</Text>
        <Text size="xsmall">
          <Anchor href="http://haleycormierphoto.com">Photos ©️  Haley Cormier</Anchor>
        </Text>
      </Box>
    </Box>
  );
};
