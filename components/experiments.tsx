import React from 'react';
import { experiments } from '../content/experiments';
import { Container } from './container';
import { StyledExperimentsSection } from '../styles/experiments.styles';
import ExperimentItem from './experiment';

const ExperimentsSection = () => (
  <StyledExperimentsSection>
    <Container>
      <h2>My Scribble Space</h2>
      <p className='section-intro max-width'>I ocasionally wite about things that fascinate me!</p>

      <section className='experiments'>
        {experiments.map((experiment, index) => (
          <ExperimentItem key={index} experiment={experiment} />
        ))}
      </section>
    </Container>
  </StyledExperimentsSection>
);

export default ExperimentsSection;
