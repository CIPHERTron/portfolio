import styled from '@emotion/styled';
import Tilt from 'react-tilt';
import { ExternalLink } from 'react-feather';

export const LinkIcon = styled(ExternalLink)`
  height: 15px;
`;

export const Heading = styled.h2`
  color: #fff;
  text-align: center;
  font-size: 64px;

  @media (max-width: 1024px) {
    font-size: 48px;
  }
  @media (max-width: 769px) {
    font-size: 32px;
  }
`;

export const Tilter = styled(Tilt)`
  padding: 40px 0;
  background: #34004a;
  margin-bottom: 0.75em;
  border-radius: 4px;
  padding: 0.75em;
  cursor: pointer;

  @media all and (min-width: 540px) {
    margin: 0 0.5em 1em;
    flex: 1 1 40%;
  }

  @media all and (min-width: 1024px) {
    flex: 1 30%;
  }
`;

export const StyledExperimentItemContainer = styled.div`
  &:hover {
    text-decoration: none;
  }

  .experiment-meta {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  time {
    font-size: 0.75em;
    color: #808080;
  }

  h3 {
    margin-bottom: 0.5em;
    font-size: 1em;
  }

  ul {
    list-style-type: none;
  }

  li {
    display: inline-block;
    border: 1px solid #bf360c;
    padding: 0.2em 0.75em;
    color: #bf360c;
    font-size: 0.75em;
    margin-right: 0.5em;
  }
`;

export const ProjectSection = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 3fr);

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 2fr);
  }
  @media (max-width: 769px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Wrapper = styled.div`
  margin: 5% 12%;
`;
