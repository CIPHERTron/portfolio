import React from 'react';
import Link from 'next/link';

import {
  StyledExperimentItemContainer,
  Tilter,
  LinkIcon,
  ProjectSection,
  Heading,
  Wrapper,
} from '../styles/experiments.styles';

interface ICard {
  basePath: string;
  articles: {
    title: string;
    href: string;
    id: string;
    slug: string;
    date: Date;
    tags: any;
    previewImage: string;
    description: string;
  }[];
}

/**
 * Renders a grid of cards
 * @param {Array} data Data to display in grid
 */

const Blogs = ({ articles, basePath }: ICard) => {
  return (
    <Wrapper>
      <Heading>Blogs & Articles</Heading>
      <ProjectSection>
        {articles.map((article) => (
          <Tilter options={{ scale: 1, speed: 200 }}>
            <Link href={`/articles/${article.slug}`}>
              <StyledExperimentItemContainer className='experiments-container'>
                <div className='experiment-meta'>
                  <time className='experiment-date'>{article.date}</time>
                  <LinkIcon />
                </div>
                <h3 className='experiment-item-heading'>{article.title}</h3>
                <p>{article.description}</p>
                <ul>
                  {article.tags.map((tag, index) => (
                    <li key={index}>{tag}</li>
                  ))}
                </ul>
              </StyledExperimentItemContainer>
            </Link>
          </Tilter>
        ))}
      </ProjectSection>
    </Wrapper>
  );
};

export default Blogs;
