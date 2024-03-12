import {
  Main,
  Box,
  Text,
  Heading,
  Paragraph,
} from "grommet";
import { Header } from "@/components/Header";
import { SitemapFooter, Footer2 } from "@/components/Footer";
import { Features } from "@/components/Features";
import { Section } from "@/components/Section";
import { FeatureSection } from "@/components/FeatureSection";

export default function Home() {
  return (
    <Box>
      <Header />
      <Main animation="fadeIn" flex="grow">
        <Box height="large" align="center" pad={{ horizontal: "small" }} >
          <Box direction="column" margin={{top: "large", bottom: "small"}}>
            <Heading
              size="small"
              textAlign="center"
              alignSelf="center"
              margin={{top: "large"}}
            >
              Bringing Modern Tech to 20th Century Homes
            </Heading>
            <Paragraph textAlign="center" alignSelf="center">
              Upgrading your legacy intercoms has never been easier
            </Paragraph>
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
                Coming Soon
              </Text>
            </Box>
          </Box>
        </Box>
        <Features />
        <FeatureSection />
      </Main>
      <Section width="xlarge">
        {/*<SitemapFooter />*/}
        <Footer2 />
      </Section>
    </Box>
  );
}
