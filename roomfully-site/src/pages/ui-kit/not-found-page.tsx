import { Box, Heading, Text } from '@chakra-ui/react';
import * as React from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../../components/page-title';

const NotFoundPage = () => {
  return (
    <>
      <PageTitle title='Not Found' />
      <Box className='container py-5'>
        <Heading className='text-secondary'>Not Found</Heading>
        <Text>
          We’re sorry. That page is not available. Please check the URL and try
          again or return to the <Link to='/ui-kit/'>UI Kit home page</Link>.
        </Text>
      </Box>
    </>
  );
};

export default NotFoundPage;
