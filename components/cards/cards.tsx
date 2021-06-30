import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { GitHub, ExternalLink } from 'react-feather';

import { StyledCards, ProjectSection, Wrapper } from '../../styles/cards.styles';
import { Heading } from '../../styles/globals.styles';

interface ICard {
  basePath: string;
  data: {
    title: string;
    href: string;
    github: string;
    id: string;
    slug: string;
    date: Date;
    previewImage: string;
    description: string;
  }[];
}

/**
 * Renders a grid of cards
 * @param {Array} data Data to display in grid
 */

const Cards = ({ data, basePath }: ICard) => {
  const router = useRouter();

  return (
    <ProjectSection>
      <Heading>{router.pathname !== '/works' && 'Works & Experience'}</Heading>
      <StyledCards>
        {data.map((singleCard) => (
          <article className='article' key={singleCard.id}>
            {/* @ts-ignore */}
            <Image
              src={singleCard.previewImage}
              alt={singleCard.title}
              width={450}
              height={220}
              sizes='(min-width: 640px) 700px, 400px'
            />
            <Wrapper style={{ marginTop: '10px' }}>
              <time>{singleCard.date}</time>
              <Wrapper>
                <a
                  href={singleCard.github}
                  onClick={(e) => {
                    e.preventDefault;
                    router.push(singleCard.github);
                  }}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <GitHub className='one' />
                </a>
                <a
                  href={singleCard.href}
                  onClick={(e) => {
                    e.preventDefault;
                    router.push(singleCard.href);
                  }}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <ExternalLink className='two' />
                </a>
              </Wrapper>
            </Wrapper>
            <Link href={`/${basePath}/[id]`} as={`/${basePath}/${singleCard.slug}`}>
              <a>
                <h2>{singleCard.title}</h2>
                {singleCard.description && <p>{singleCard.description}</p>}
              </a>
            </Link>
          </article>
        ))}
      </StyledCards>
    </ProjectSection>
  );
};

export { Cards };
