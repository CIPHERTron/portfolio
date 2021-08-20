import React, { useEffect } from 'react';
import TextTransition, { presets } from 'react-text-transition';
import { animateScroll as scroll } from 'react-scroll';

import { Container, OutLineBtn } from '../.';
import siteConfig from '../../config/index.json';
import {
  StyledHomeHeading,
  LandingContainer,
  LandingHeading,
  Illustration,
  LandingLeft,
  LandingRight,
} from '../../styles/header.styles';

const HomeHeader = () => {
  const [index, setIndex] = React.useState(0);
  const scrollTo = () => {
    scroll.scrollTo(700);
  };

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      2000, // every 1 second
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <StyledHomeHeading>
      <Container>
        <LandingContainer>
          <LandingLeft>
            <LandingHeading>{siteConfig.site.intro}</LandingHeading>
            <h2 className='inline'>
              {' '}
              I'm a{' '}
              <TextTransition
                inline
                text={siteConfig.site.texts[index % siteConfig.site.texts.length]}
                springConfig={presets.gentle}
              />
            </h2>
            <div className='buttons'>
              <a target='_blank' rel='noopener noreferrer' href={siteConfig.site.resumeLink}>
                <OutLineBtn label='Resume' />
              </a>
              <a onClick={scrollTo}>
                <OutLineBtn label='Explore More' />
              </a>
            </div>
          </LandingLeft>
          <LandingRight>
            <Illustration
              alt='Lottiefiles SVG Animation'
              src='https://res.cloudinary.com/pritish007/image/upload/v1627925236/Personal%20Portfolio/animation_crd0kk.gif'
            />
          </LandingRight>
        </LandingContainer>
      </Container>
    </StyledHomeHeading>
  );
};

export default HomeHeader;
