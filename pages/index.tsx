import React, { FC } from 'react';

import { Layout, AboutSection, Blogs, SkillsSection, Cards, Container } from '../components';
import { StyledIndexPage } from '../styles/home.styles';
import { getContentList } from '../lib/content';

//@ts-ignore
const Index: FC = ({ selectedWorks, articles }) => {
  return (
    <Layout pathname={'/'} pageTitle='Pritish Samal'>
      <StyledIndexPage>
        <AboutSection />
        <SkillsSection />
        <Cards data={selectedWorks} basePath='works' />
        <Blogs articles={articles} basePath='articles' />
      </StyledIndexPage>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const works = await getContentList('work');
  const selectedWorks = works.filter((work) => work.selectedWork);
  const articles = getContentList('articles');

  return {
    props: {
      selectedWorks,
      articles,
    },
  };
};

export default Index;
