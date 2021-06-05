import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
  color: purple;
`;

function Home() {
  return (
    <Wrapper>
      <main>
        <h1 className='title'>Welcome to NextJS X TypeScript Boilerplate</h1>
        <h3>By default, here you get:</h3>
        <ul>
          <li>Next JS</li>
          <li>Typescript</li>
          <li>Redux</li>
          <li>Styled Components</li>
          <li>Bootstrap</li>
          <li>Firebase</li>
        </ul>

        <p>aim: GO SERVERLESS</p>
      </main>
    </Wrapper>
  );
}

export default Home;
