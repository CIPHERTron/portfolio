import React from 'react';
import { StyledFooterSection } from '../styles/footer.styles';
import { Icons } from '.';
import { Container } from './container';

const Footer = () => (
  <StyledFooterSection>
    <Container className='footer-container'>
      <Icons />
    </Container>

    <Container>
      <p className='about-site'>
        Built with 💙 by{' '}
        <a href='https://github.com/CIPHERTron/portfolio' target='_blank' rel='noreferrer noopener'>
          @CIPHERTron
        </a>
      </p>
    </Container>
  </StyledFooterSection>
);

export default Footer;
