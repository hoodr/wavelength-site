import { useState } from "react";
import type { AppProps } from "next/app";
import { Grommet } from "grommet";
import { grommet } from "grommet/themes";
import { deepMerge } from "grommet/utils";


const theme = deepMerge(grommet, {
  global: {
    colors: {
      brand: {
        dark: "#039153",
        light: "#004225"
      },
      tutorialBlue: "#228BE6",
      sg: "#01342c",
      sg2: "#204f32",
      brg: "#004225",
      accentYellow: "#fed401",
      lightGrey: "#F0F0F4",
      background: "#FFFFFF",
    },
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
});

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppProps) {
  const [darkMode, setDarkMode] = useState(false);
  const getLayout = Component.getLayout ?? ((page) => page);

  // <Component {...pageProps} />
  return (
    <Grommet theme={theme} themeMode={darkMode ? "dark" : "light"}>
      {getLayout(<Component {...pageProps} />)}
    </Grommet>
  );
}
