import React from 'react';
import {
  StyledFooterSection,
  GitHubIcon,
  LinkedinIcon,
  TwitterIcon,
} from '../styles/footer.styles';
import { Container } from './container';

const Footer = () => (
  <StyledFooterSection>
    <Container className='footer-container'>
      <ul className='footerSocialLinks'>
        <li className='footerSocialLink'>
          <a
            className='footerLink'
            href='https://github.com/CIPHERTron'
            target='_blank'
            rel='noreferrer noopener'
            aria-label='github'
          >
            <GitHubIcon />
          </a>
        </li>

        <li className='footerSocialLink'>
          <a
            className='footerLink'
            href='https://linkedin.com.in/pritishsamal/'
            target='_blank'
            rel='noreferrer noopener'
            aria-label='codepen'
          >
            <LinkedinIcon />
          </a>
        </li>

        <li className='footerSocialLink'>
          <a
            className='footerLink'
            href='https://twitter.com/PritishSamal11'
            target='_blank'
            rel='noreferrer noopener'
            aria-label='twitter'
          >
            <TwitterIcon />
          </a>
        </li>
      </ul>
    </Container>

    <Container>
      <p className='about-site'>
        Built by{' '}
        <a href='https://twitter.com/PritishSamal11/' target='_blank' rel='noreferrer noopener'>
          @PritishSamal11
        </a>
      </p>
    </Container>
  </StyledFooterSection>
);

export default Footer;
