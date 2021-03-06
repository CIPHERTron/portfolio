import React from 'react';
import { Layout, Container, Cards } from '../components';
import { getContentList } from '../lib/content';

/**
 * Work page `/work`
 */
const Work = ({ works }) => {
  return (
    <Layout
      pathname={'/works'}
      pageTitle='Works & Projects'
      pageDescription='Works and projects spanning Product design, Research, frontend and software engineering with ReactJS, Next JS, NodeJs  & Flask.'
    >
      <Container>
        {/* <p className='page-intro'>
          
        </p> */}
        <Cards data={works} basePath='works' />
      </Container>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const works = await getContentList('work');
  return {
    props: { works },
  };
};

export default Work;
