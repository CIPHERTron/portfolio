import styled from '@emotion/styled';

export const StyledSkills = styled.section`
  height: fit-content;
  margin: 10% auto;
`;

export const Heading = styled.h2`
  font-size: 1.75em;

  @media (min-width: 1024px) {
    font-size: 2.75em;
  }
`;

export const ChipContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 140px;
  padding: 5px 10px;
  border-radius: 5px;
  background-color: #38234a;
  cursor: pointer;
  margin-bottom: 20px;

  :hover {
    background-color: #77acf1;
  }
`;

export const SkillName = styled.p`
  color: #f1f1f1;
  margin: 0;
`;

export const SkillImage = styled.img`
  height: 20px;
  width: auto;
  margin: 0;
  padding-right: 5px;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 2fr);

  @media (max-width: 769px) {
    grid-template-columns: repeat(4, 2fr);
  }
  @media (max-width: 586px) {
    grid-template-columns: repeat(3, 2fr);
  }
  @media (max-width: 444px) {
    grid-template-columns: repeat(2, 2fr);
  }
`;
