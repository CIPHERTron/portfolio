import React from 'react';

import { Container } from './container';
import { StyledDesignPlus, Image, Box, Text } from '../styles/index.styles';
import { LightHeading } from '../styles/globals.styles';

const AboutSection = () => {
  return (
    <StyledDesignPlus>
      <Container className='container'>
        <Box>
          <Text>
            <LightHeading>About Me</LightHeading>
            <p>
              Hello! This is Pritish Samal, a prefinal year student from National Institute of
              Technology, Rourkela 🇮🇳 majoring in Ceramic Engineering. I'm a Full Stack Developer
              having experience in MERN Stack, Flask and frameworks like Nextjs & Gatsby. I'm also a
              huge cloud & open-source enthusiast who believes in the power of community. Writing
              clean code is and will always be a top priority for me.
            </p>
            <p>
              The recent outbreak of the global pandemic, which led to the lockdown, has made me a
              typical computer nerd. So, you'll rarely find me AFK. When I'm not coding, I'll be
              busy organising or participating in Hackathons, involved in community programs,
              hosting or attending seminars & workshops, writing blogs and solving doubt & mentoring
              students. I also love outdoor sports like football & basketball and have a knack of
              mobile photography.
            </p>
          </Text>
          <Image
            src='/images/avatar.jpeg'
            sizes='(min-width: 759px) 800px'
            alt='Image of Pritish Samal'
          />
        </Box>
      </Container>
    </StyledDesignPlus>
  );
};

export default AboutSection;
