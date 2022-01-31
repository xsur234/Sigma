import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center style={{color:props.mode==="Light"?"linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%)":"black"}}>
          Horika! <br />
          I'am Suraj
  
        </SectionTitle>
        <SectionText>
        The purpose of SIGΣA_DEV is to help aspiring and established developers to take their development skills to the next level and build awesome apps.
        </SectionText>
        
        <Button onClick={props.handleClick}>Learn More</Button>
        
      </LeftSection>
    </Section>
  </>
);

export default Hero;