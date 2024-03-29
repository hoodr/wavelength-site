import React from "react";

import { Anchor, Box, Image, Stack } from "grommet";

const Logo = () => (
  <Anchor
    href="/"
    icon={<Image
          src="/wavelength-logo-v0.0.2.png"
          alt="Wavelength Logo"
          //width={120}
          height={96}
        />}
    color="white"
  />
);

const LogoAlt = () => (
  <Stack anchor="center">
    <Box
      width="xxsmall"
      height="xxsmall"
      round="small"
      align="center"
      justify="center"
      border={{ color: "accent-4", size: "xlarge" }}
    />
    <Box
      width={"32px"}
      height={"32px"}
      round="small"
      align="center"
      justify="center"
      background="white"
    />
  </Stack>
  
);
