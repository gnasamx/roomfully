import { HStack, Text } from '@chakra-ui/react';
import * as React from 'react';
import { HiStar } from 'react-icons/hi';
import type { ReviewsIconWithCountsAndNoOfReviewsProps } from '../models/reviews-icon-with-counts-and-no-of-reviews';

/** Atom */

const ReviewsIconWithCountsAndNoOfReviews: React.FC<ReviewsIconWithCountsAndNoOfReviewsProps> =
  React.memo(({ reviewsScorePerMonth, numberOfReviews }) => {
    return (
      <HStack spacing={1}>
        <HiStar color='tomato' />
        <Text fontWeight='semibold' fontSize='sm'>
          {reviewsScorePerMonth}
        </Text>
        <Text fontSize='sm' color='gray.600'>
          ({numberOfReviews})
        </Text>
      </HStack>
    );
  });

export default ReviewsIconWithCountsAndNoOfReviews;
