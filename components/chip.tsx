import React from 'react';
import { ChipContainer, SkillImage, SkillName } from '../styles/skills.styles';

const Chip = ({ name, src }) => {
  const location = `/images/skills/${src}`;
  return (
    <ChipContainer>
      <SkillImage src={location} alt='test logo' />
      <SkillName>{name}</SkillName>
    </ChipContainer>
  );
};

export default Chip;
