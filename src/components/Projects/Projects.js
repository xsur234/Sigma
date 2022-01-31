import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = (props) => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map((p, i) => {
        return (
          <BlogCard  style={{background:props.mode==="Dark"?"#035782":"black"}} key={i}>
          <Img src={p.image} />
            <TitleContent>
              <HeaderThree style={{color:props.mode==="Dark"?"white":"#9cc9e3"}} title>{p.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo  style={{color:props.mode==="Dark"?"white":"#ffffff"}} title  className="card-info">{p.description}</CardInfo>
            <div>
              <TitleContent style={{color:props.mode==="Dark"?"#ffffff":"#ffffff"}} >Stack</TitleContent>
              <TagList >
                {p.tags.map((t, i) => {
                  return <Tag style={{color:props.mode==="Dark"?"white":"white"}} key={i}>{t}</Tag>;
                })}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={p.visit}>Code</ExternalLinks>
              <ExternalLinks  href={p.source}>Source</ExternalLinks>
            </UtilityList>
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Projects;