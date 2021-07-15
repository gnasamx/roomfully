import { Box, Divider, Grid, Heading, Icon, Text } from '@chakra-ui/react';
import * as React from 'react';
import { BsDot } from 'react-icons/bs';
import type { ReviewsIconWithCountsAndNoOfReviewsProps } from '../models/reviews-icon-with-counts-and-no-of-reviews';
import ReviewsIconWithCountsAndNoOfReviews from './reviews-icon-with-counts-and-no-of-reviews';
import parse from 'html-react-parser';

/** Molecule */
interface ListingDescriptionHeaderProps
  extends ReviewsIconWithCountsAndNoOfReviewsProps {
  name: string;
  propertyType: string;
  description: string;
}

const ListingDescriptionHeader: React.FC<ListingDescriptionHeaderProps> =
  React.memo(
    ({
      name,
      propertyType,
      description,
      reviewsScorePerMonth,
      numberOfReviews,
    }) => {
      return (
        <Box>
          <Grid
            alignItems='center'
            templateRows={['1fr auto', '1fr']}
            templateColumns={['1fr', 'repeat(2, min-content) auto']}
            gap={1}
            mb={2}
          >
            <ReviewsIconWithCountsAndNoOfReviews
              reviewsScorePerMonth={reviewsScorePerMonth}
              numberOfReviews={numberOfReviews}
            />
            <Icon as={BsDot} display={['none', 'inline']} color='gray.600' />
            <Text as='span' color='gray.600'>
              {propertyType}
            </Text>
          </Grid>
          <Heading as='h1' size='xl'>
            {name}
          </Heading>
          <Divider my={4} />
          <Text color='gray.600'>{parse(description)}</Text>
        </Box>
      );
    }
  );

export default ListingDescriptionHeader;
