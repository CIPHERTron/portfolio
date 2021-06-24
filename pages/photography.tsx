import React from 'react';
import { Layout, Container } from '../components';
const Photography = ({ articles }) => {
  return (
    <Layout
      pathname={'/photography'}
      pageTitle='Photography'
      pageDescription='Showcasing some of my best shots till date.'
    >
      <Container>
        <p className='page-intro'>
          I've a knack of Photography and I click on my Mobile. So, here are some shots that I've
          clicked. PS: I don't have a DSLR :P'
        </p>

        <h2 style={{ textAlign: 'center' }}>Photography Page Coming Soon!</h2>
      </Container>
    </Layout>
  );
};

export default Photography;
