import React from 'react';
import { Container, Header, Description, Logo } from '../styles/experience.styles';

function experience({ heading, logo, src, alt, description }) {
  return (
    <Container>
      <Header>
        <Logo src={`/images/experience/${logo}`} alt={`${alt}`} />
        <a className='heading-link' target='_blank' rel='noopener noreferrer' href={src}>
          <h3 className='heading'>{heading}</h3>
        </a>
      </Header>
      <Description>{description}</Description>
    </Container>
  );
}

export default experience;
