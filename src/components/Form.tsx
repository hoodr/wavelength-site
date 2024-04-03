// @ts-nocheck
import { Box } from "grommet";

export const Form = () => {
  return (
    <Box id="request-demo">
      <iframe
        data-tally-src="https://tally.so/embed/wky196?transparentBackground=1%26dynamicHeight=1"
        loading="lazy"
        width="100%"
        height="594"
        style={{border:0}}
        title="Request a Demo"
      >
      </iframe>
      {"undefined"!=typeof Tally && Tally.loadEmbeds()}
    </Box>
  );
};
