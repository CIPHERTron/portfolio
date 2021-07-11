import React from 'react';
import { Layout, Container, Experience } from '../components';
import { List } from '../config/experience';

const ExperiencePage = () => {
  return (
    <Layout
      pathname={'/experience'}
      pageTitle='Experience'
      pageDescription='Listing my work and community experiences.'
    >
      <Container>
        <p className='page-intro'>Listing my work and community experiences.</p>

        {List.map(({ heading, logo, src, alt, desc }, idx) => (
          <Experience
            key={idx}
            heading={heading}
            logo={logo}
            src={src}
            alt={alt}
            description={desc}
          />
        ))}
      </Container>
    </Layout>
  );
};

export default ExperiencePage;
