import React from 'react';
import { Layout, Container } from '../components';
const Experience = ({ articles }) => {
  return (
    <Layout
      pathname={'/experience'}
      pageTitle='Experience'
      pageDescription='Listing my work and community experiences.'
    >
      <Container>
        <p className='page-intro'>Listing my work and community experiences.</p>

        <h2 style={{ textAlign: 'center' }}>Stay Tuned!</h2>
      </Container>
    </Layout>
  );
};

export default Experience;
