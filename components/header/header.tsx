import React from 'react';
import HomeHeader from './home-header';
import PageHeader from './page-header';

interface IHeader {
  pathname: string;
  title?: string;
  date?: Date;
  articleImage?: string;
}

const header = ({ pathname, title }: IHeader) => {
  switch (pathname) {
    case '/':
      return <HomeHeader />;

    default:
      return <PageHeader headingTitle={title} />;
  }
};

export default header;
