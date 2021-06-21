import React, { useEffect } from 'react';
import TextTransition, { presets } from 'react-text-transition';

import { Container, OutLineBtn } from '../.';
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

const TEXTS = ['Frontend Developer', 'Backend Developer', 'Cloud Enthusiast', 'Opensource 💙'];

const HomeHeader = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      1000, // every 1 second
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <StyledHomeHeading>
      <Container>
        <LandingContainer>
          <LandingLeft>
            <LandingHeading>Hey, I'm Pritish Samal</LandingHeading>
            {/* <LandingAbout>I am a Full Stack Developer</LandingAbout> */}
            <h2 className='inline'>
              {' '}
              I'm a{' '}
              <TextTransition
                inline
                text={TEXTS[index % TEXTS.length]}
                springConfig={presets.gentle}
              />
            </h2>
            <div className='buttons'>
              <OutLineBtn label='Resume' />
              <OutLineBtn label='Explore More' />
            </div>
          </LandingLeft>
          <LandingRight>
            <Illustration src='/images/landing.png' />
          </LandingRight>
        </LandingContainer>
      </Container>
    </StyledHomeHeading>
  );
};

export default HomeHeader;
