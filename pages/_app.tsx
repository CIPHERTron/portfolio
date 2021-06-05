import { AppProps } from 'next/app';
import Head from 'next/head';

import { Layout } from '../Components';

import 'styles/globals.css';
import React from 'react';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <React.Fragment>
      <Head>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover'
        />
      </Head>
      <Layout />
    </React.Fragment>
  );
};

export default MyApp;
