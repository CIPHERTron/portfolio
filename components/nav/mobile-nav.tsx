import React from 'react';
import Link from 'next/link';

import { StyledMobileNav } from '../../styles/nav.styles';

const MobileNav = () => {
  return (
    <StyledMobileNav>
      <div className='mobile-nav-container'>
        <ul className='linkList'>
          <li className='listItem'>
            <Link href='/'>
              <a className='link'>Home</a>
            </Link>
          </li>

          <li className='listItem'>
            <Link href='/works'>
              <a className='link'>Works & Projects</a>
            </Link>
          </li>

          <li className='listItem'>
            <Link href='/articles'>
              <a className='link'>Articles</a>
            </Link>
          </li>

          <li className='listItem'>
            <Link href='/experience'>
              <a className='link'>Experience</a>
            </Link>
          </li>

          <li className='listItem'>
            <Link href='/photography'>
              <a className='link'>Photography</a>
            </Link>
          </li>
        </ul>
      </div>
    </StyledMobileNav>
  );
};

export default MobileNav;
