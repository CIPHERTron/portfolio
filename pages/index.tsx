import React, { FC } from 'react';
import Image from 'next/image';

import { Layout, AboutSection, ExperimentsSection, SkillsSection } from '../components';
import { StyledIndexPage } from '../styles/home.styles';
import { getContentList } from '../lib/content';

/**
 * Index page `/index`
 */

//@ts-ignore
const Index: FC = ({ selectedWorks }) => {
  return (
    <Layout pathname={'/'} pageTitle='Pritish Samal'>
      {/* <Container>
          <Cards data={selectedWorks} basePath='works' />
        </Container> */}
      <StyledIndexPage>
        <AboutSection />
        <SkillsSection />
        <AboutSection />
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
