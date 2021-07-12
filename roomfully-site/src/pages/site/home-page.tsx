import { Container, Link } from '@chakra-ui/react';
import React from 'react';
import { Link as ReachLink } from 'react-router-dom';

const HomePage = () => {
  return (
    <Container as='section' maxWidth='container.xl' padding={4}>
      <Link as={ReachLink} to='/ui-kit'>
        Go to Ui-Kit
      </Link>
    </Container>
  );
};

export default HomePage;
