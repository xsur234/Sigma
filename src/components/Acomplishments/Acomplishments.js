import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 8, text: 'Open Source Projects'},
  { number: 100, text: 'Students', },
  { number: 190, text: 'Github Followers', },
  { number: 500, text: 'Github Stars', },
 
];


const Acomplishments = (props) => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box style={{background:props.mode==="Dark"?"#035782":"#323232"}} key={index}>
          <BoxNum>{`${card.number}+`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
