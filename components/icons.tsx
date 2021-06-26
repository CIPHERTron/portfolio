import React from 'react';
import Link from 'next/link';
import { GitHub, Twitter, Twitch, Instagram, Linkedin, Mail } from 'react-feather';
import { Wrapper } from '../styles/icons.styles';

export const Icons = () => {
  return (
    <Wrapper>
      <Link href='https://github.com/CIPHERTron/'>
        <a target='_blank' rel='noreferrer noopener' className='icon-link'>
          <GitHub />
        </a>
      </Link>
      <Link href='https://linkedin.com/in/pritishsamal/'>
        <a target='_blank' rel='noreferrer noopener' className='icon-link'>
          <Linkedin />
        </a>
      </Link>
      <Link href='https://instagram.com/pritish__007/'>
        <a target='_blank' rel='noreferrer noopener' className='icon-link'>
          <Instagram />
        </a>
      </Link>
      <Link href='https://twitter.com/PritishSamal11/'>
        <a target='_blank' rel='noreferrer noopener' className='icon-link'>
          <Twitter />
        </a>
      </Link>
      <Link href='mailto:pritish.samal918@gmail.com'>
        <a target='_blank' rel='noreferrer noopener' className='icon-link'>
          <Mail />
        </a>
      </Link>
      <Link href='https://twitch.tv/pritishsamal/'>
        <a target='_blank' rel='noreferrer noopener' className='icon-link'>
          <Twitch />
        </a>
      </Link>
    </Wrapper>
  );
};
