import { Box, Heading, Link, Text } from '@chakra-ui/react';
import * as React from 'react';
import { Link as ReachLink } from 'react-router-dom';
import PageTitle from '../../components/page-title';

const NotFoundPage = () => {
  return (
    <>
      <PageTitle title='Not Found' />
      <Box className='container paddingY-5'>
        <Heading className='text-secondary'>Not Found</Heading>
        <Text>
          We’re sorry. That page is not available. Please check the URL and try
          again or return to the{' '}
          <Link as={ReachLink} to='/ui-kit/'>
            UI Kit home page
          </Link>
          .
        </Text>
      </Box>
    </>
  );
};

export default NotFoundPage;
