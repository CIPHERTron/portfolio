import React from 'react';

import { Container } from './container';
import { StyledDesignPlus, Image, Box, Text } from '../styles/index.styles';

const AboutSection = () => {
  return (
    <StyledDesignPlus>
      <Container className='container'>
        <Box>
          <Text>
            <h2>About Me</h2>
            <p>
              Pritish Samal is a sophomore from National Institute of Technology, Rourkela, India.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
              libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum
              imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper
              porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
            </p>
            <p>
              Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur
              tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis.
              Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus
              risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula
              lacinia aliquet.
            </p>
          </Text>
          <Image
            src='/images/avatar.jpg'
            sizes='(min-width: 759px) 800px'
            alt='Image of Pritish Samal'
          />
        </Box>
      </Container>
    </StyledDesignPlus>
  );
};

export default AboutSection;
