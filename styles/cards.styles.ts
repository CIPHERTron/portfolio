import styled from '@emotion/styled';

export const ProjectSection = styled.section`
  padding-left: 12%;
  padding-right: 12%;
`;

export const StyledCards = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 1300px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 769px) {
    grid-template-columns: repeat(1, 1fr);
  }

  h2 {
    color: var(--text-color);
  }
  p {
    color: var(--text-color-dark);
  }

  article.article {
    margin: 0 2% 2%;
    overflow: hidden;

    &:hover h2 {
      color: #fff;
    }
    &:hover p {
      color: var(--text-color-bright);
    }

    img {
      transition: all var(--animation-duration) var(--transition-timing-function);
      object-fit: cover;
      cursor: pointer;
    }

    &:hover img {
      transform: scale(1.2);
    }

    .one,
    .two {
      margin-left: 7px;
      height: 20px;
    }

    @media all and (min-width: 560px) {
      margin-right: 0.5em;

      &:last-child {
        margin-right: 0;
      }
    }

    @media all and (min-width: 1024px) {
      flex: 0 1 32.5%;
      img {
        /* height: 180px; */
      }
    }
  }

  @media all and (min-width: 560px) {
    justify-content: space-between;
    flex-direction: row;
  }

  time {
    color: #808080;
    font-size: 0.9em;
  }

  a {
    text-decoration: none;

    &:hover {
      text-decoration: none;
    }

    &:hover h2 {
      text-decoration: underline;
      color: #fff;
    }
  }

  h2 {
    font-size: 1.17em;
    margin-bottom: 5px;
  }

  img {
    width: 100%;
    object-fit: cover;
    margin-bottom: 0.4em;
    transform: scale(1);
    transition: 5s all;
  }

  @media all and (min-width: 560px) {
    justify-content: flex-start;
    flex-direction: row;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
