import React from 'react';
import { Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <Box as='section'>
      <Link to='/ui-kit'>Go to Ui-Kit</Link>
    </Box>
  );
};

export default HomePage;
