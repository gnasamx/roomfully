import { Box, Link } from '@chakra-ui/react';
import React from 'react';
import { Link as ReachLink } from 'react-router-dom';

const HomePage = () => {
  return (
    <Box as='section'>
      <Link as={ReachLink} to='/ui-kit'>
        Go to Ui-Kit
      </Link>
    </Box>
  );
};

export default HomePage;
