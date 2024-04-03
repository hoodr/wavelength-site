import {
  Anchor,
  Main,
  Box,
  Text,
  Heading,
} from "grommet";
import { Header } from "@/components/Header";
import { Footer2 } from "@/components/Footer";
import { Features } from "@/components/Features";
import { Section } from "@/components/Section";
import { FeatureSection } from "@/components/FeatureSection";
import { Form } from "@/components/Form";

// Upgrading your legacy intercom has never been easier

export default function Home() {
  return (
    <Box>
      <Header />
      <Main animation="fadeIn" flex="grow">
        <Box
          height="large"
          align="center"
          alignContent="center"
          justify="center"
          pad={{ horizontal: "small" }}
          background={{ image: "url(/landing-2.jpeg)", size: "cover"}}
        >
          <Box
            direction="column"
            background={{color: "#111111", opacity: "medium"}}
            round="medium"
            margin={{top: "large", bottom: "small"}}
          >
            <Heading
              size="medium"
              textAlign="center"
              alignSelf="center"
              margin={{top: "large"}}
              color="white"
            >
              Bringing Modern Access Control to 20th Century Homes
            </Heading>
            <Heading textAlign="center" alignSelf="center" color="white" level="2">
              Upgrading your building has never been easier
            </Heading>
          </Box>
          <Box margin={{ vertical: "large" }}>
            <Anchor href="#request-demo">
              <Box
                round="large"
                background={{ color: "brand" }}
                pad={{ horizontal: "large", vertical: "small" }}
              >
                <Text
                  textAlign="center"
                  size="large"
                  weight="bold"
                  style={{ fontFamily: "monospace" }}
                  color="white"
                >
                  Request a Demo
                </Text>
              </Box>
            </Anchor>
          </Box>
        </Box>
        <Features />
        <FeatureSection />
        <Form />
      </Main>
      <Section width="xlarge">
        {/*<SitemapFooter />*/}
        <Footer2 />
      </Section>
    </Box>
  );
}
