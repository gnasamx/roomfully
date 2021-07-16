import { Grid, HStack, Icon, Text, VStack } from '@chakra-ui/react';
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
      <VStack spacing={4} alignItems='flex-start' width='full'>
        <Grid
          width='full'
          templateRows='1fr'
          templateColumns={['1fr', '1fr max-content']}
          gap={1}
        >
          <Text fontWeight='bold'>{shortReviewTitle}</Text>
          <HStack>
            <Icon as={HiStar} color='red' />
            <Text fontWeight='semibold'>{reviewScore}</Text>
          </HStack>
        </Grid>
        <Text color='gray.600'>{reviewDescription}</Text>
        <UserDetails
          name={name}
          profilePicture={profilePicture}
          reviewAddedOn={reviewAddedOn}
        />
      </VStack>
    );
  }
);

export default ReviewCard;
