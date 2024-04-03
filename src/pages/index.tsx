import {
  Anchor,
  Main,
  Box,
  Text,
  Heading,
  Image,
  Paragraph,
} from "grommet";
import { Header } from "@/components/Header";
import { SitemapFooter, Footer2 } from "@/components/Footer";
import { Features } from "@/components/Features";
import { Section } from "@/components/Section";
import { FeatureSection } from "@/components/FeatureSection";
import { Form } from "@/components/Form";


// background="url(/landing_1.jpg)"

// <Image src="/landing_1.jpg" alt="landing image" fill="horizontal" />
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
          <Box direction="column" margin={{top: "large", bottom: "small"}}>
            <Heading
              size="medium"
              textAlign="center"
              alignSelf="center"
              margin={{top: "large"}}
              color="white"
            >
              Bringing Modern Tech to 20th Century Homes
            </Heading>
            <Heading textAlign="center" alignSelf="center" color="white" level="2">
              Upgrading your legacy intercom has never been easier
            </Heading>
          </Box>
          <Box margin={{ vertical: "large" }}>
            <Box
              round="large"
              background={{ color: "brand", opacity: "strong" }}
              pad={{ horizontal: "large", vertical: "small" }}
            >
              <Text
                textAlign="center"
                size="large"
                weight="bold"
                style={{ fontFamily: "monospace" }}
              >
                Request a Demo
              </Text>
            </Box>
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
