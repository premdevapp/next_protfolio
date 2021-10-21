import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        my personal portfolio
      </SectionTitle>
      <SectionText>
        I am a aspiring developer enthusiased in devloping web and mobile
        application and i dabble on upcoming tech specs which catch my attention
      </SectionText>
      <Button
        onClick={() =>
          (window.location = "https://www.facebook.com/Premnathdashanddaring")
        }
      >
        Learn More About Me
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
