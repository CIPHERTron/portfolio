import React from 'react';

import { Container } from '../container';
import siteConfig from '../../config/index.json';
import {
  StyledHomeHeading,
  LandingContainer,
  LandingHeading,
  Illustration,
  LandingLeft,
  LandingAbout,
  LandingRight,
} from '../../styles/header.styles';

const HomeHeader = () => (
  <StyledHomeHeading>
    <Container>
      <LandingContainer>
        <LandingLeft>
          <LandingHeading>Hey, I'm Pritish Samal</LandingHeading>
          <LandingAbout>A Full Stack Developer</LandingAbout>
        </LandingLeft>
        <LandingRight>
          <Illustration src='/images/landing.png' />
        </LandingRight>
      </LandingContainer>
    </Container>
  </StyledHomeHeading>
);

export default HomeHeader;
