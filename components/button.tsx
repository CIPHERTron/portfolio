import React from 'react';
import Link from 'next/link';

import { OutlinedButton, ButtonWrapper } from '../styles/buttons.styles';

export const OutLineBtn = ({ label }) => <OutlinedButton>{label}</OutlinedButton>;

export const ExploreButton = ({ label, href }) => (
  <ButtonWrapper>
    <Link href={href} as={href}>
      <a>
        <OutlinedButton>{label}</OutlinedButton>
      </a>
    </Link>
  </ButtonWrapper>
);
