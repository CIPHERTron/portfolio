import React from 'react';
import { Chip, Container } from './.';
import { StyledSkills, Wrapper } from '../styles/skills.styles';
import { Heading } from '../styles/globals.styles';
import { skills } from '../config/skills';

const SkillsSection = () => {
  return (
    <StyledSkills>
      <Container width='default'>
        <Heading>Tech Stack</Heading>
        <Wrapper>
          {skills.map(({ name, src }, index) => (
            <Chip key={index} name={name} src={src} />
          ))}
        </Wrapper>
      </Container>
    </StyledSkills>
  );
};

export default SkillsSection;
