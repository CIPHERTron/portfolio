import React, { FC } from 'react';

import { Layout, AboutSection, Blogs, SkillsSection, Cards, Container } from '../components';
import { StyledIndexPage } from '../styles/home.styles';
import { getContentList } from '../lib/content';

//@ts-ignore
const Index: FC = ({ selectedWorks, selectedArticles }) => {
  return (
    <Layout pathname={'/'} pageTitle='Pritish Samal'>
      <StyledIndexPage>
        <AboutSection />
        <SkillsSection />
        <Cards data={selectedWorks} basePath='works' />
        <Blogs articles={selectedArticles} basePath='articles' />
      </StyledIndexPage>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const works = await getContentList('work');
  const selectedWorks = works.filter((work) => work.selectedWork);
  const articles = getContentList('articles');
  const selectedArticles = articles.filter((article) => article.category === 'selected');

  return {
    props: {
      selectedWorks,
      selectedArticles,
    },
  };
};

export default Index;
