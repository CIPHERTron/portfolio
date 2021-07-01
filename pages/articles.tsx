import React from 'react';
import { Layout, Container, Cards } from '../components';
import { getContentList } from '../lib/content';
import Blogs from '../components/blogs';

/**
 * Article page `/articles`
 */

const Articles = ({ articles }) => {
  return (
    <Layout
      pathname={'/articles'}
      pageTitle='Articles'
      pageDescription='Articles and technical blogs about Full Stack Web Development, Open-source and Communities'
    >
      <Container>
        <p className='page-intro'>
          I ocasionally write about things that I am exploring or the things that fascinate me. Here
          are a few examples.
        </p>

        <Blogs articles={articles} basePath='articles' />
      </Container>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const articles = getContentList('articles');
  return {
    props: { articles },
  };
};

export default Articles;
