import { Grid, HStack, Icon, Text } from '@chakra-ui/react';
import * as React from 'react';
import { HiStar } from 'react-icons/hi';
import type { ReviewCardProps } from '../models/review-card';
import UserDetails from './user-details';

/** Molecule */

const ReviewCard: React.FC<ReviewCardProps> = React.memo(
  ({
    name,
    profilePicture,
    reviewAddedOn,
    reviewDescription,
    reviewScore,
    shortReviewTitle,
  }) => {
    return (
      <Grid gap={3} templateRows='min-content min-content 1fr' width='full'>
        <Grid
          width='full'
          templateRows='1fr'
          templateColumns='1fr max-content'
          gap={2}
          alignItems='flex-start'
        >
          <UserDetails
            name={name}
            profilePicture={profilePicture}
            reviewAddedOn={reviewAddedOn}
          />
          <HStack>
            <Icon as={HiStar} color='red' />
            <Text fontWeight='semibold'>{reviewScore}</Text>
          </HStack>
        </Grid>
        <Text fontWeight='medium'>{shortReviewTitle}</Text>
        <Text color='gray.600'>{reviewDescription}</Text>
      </Grid>
    );
  }
);

export default ReviewCard;
