import React, { FC } from 'react';

import { Layout, AboutSection, ExperimentsSection, SkillsSection, Cards } from '../components';
import { StyledIndexPage } from '../styles/home.styles';
import { getContentList } from '../lib/content';

//@ts-ignore
const Index: FC = ({ selectedWorks }) => {
  return (
    <Layout pathname={'/'} pageTitle='Pritish Samal'>
      <StyledIndexPage>
        <AboutSection />
        <SkillsSection />
        <Cards data={selectedWorks} basePath='works' />
        <ExperimentsSection />
      </StyledIndexPage>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const works = await getContentList('work');
  const selectedWorks = works.filter((work) => work.selectedWork);

  return {
    props: {
      selectedWorks,
    },
  };
};

export default Index;
