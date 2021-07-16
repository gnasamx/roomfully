import { Box, Container, Grid, Link } from '@chakra-ui/react';
import React from 'react';
import { Link as ReachLink } from 'react-router-dom';
import { ListingDescriptionReviews } from '../../components';

const HomePage = () => {
  const props = {
    reviewsScorePerMonth: 4.96,
    numberOfReviews: 235,
    allReviewsButton: 'All Reviews',
    reviewSentiments: [
      {
        type: 'Positive',
        category: '4 stars and above',
        value: 80,
      },
      {
        type: 'Neutral',
        category: '3 stars and above',
        value: 15,
      },
      {
        type: 'Negative',
        category: 'under 2 stars',
        value: 5,
      },
    ],
  };

  return (
    <Container as='section' maxWidth='container.xl' padding={4}>
      <Link as={ReachLink} to='/ui-kit'>
        Go to Ui-Kit
      </Link>
      <Grid templateColumns='1fr 350px' columnGap={6}>
        <ListingDescriptionReviews {...props} />
        <Box
          borderColor='gray.200'
          borderWidth={1}
          borderRadius='lg'
          padding={4}
        >
          This is a box
        </Box>
      </Grid>
    </Container>
  );
};

export default HomePage;
