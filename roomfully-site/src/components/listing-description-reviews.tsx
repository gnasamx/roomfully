import {
  Box,
  Button,
  Divider,
  Grid,
  Heading,
  HStack,
  Icon,
  Text,
  VStack
} from '@chakra-ui/react';
import * as React from 'react';
import { HiStar } from 'react-icons/hi';
import { ListingDescriptionReviewsProps } from '../models/listing-description-reviews';
import ReviewCard from './review-card';
import ReviewSentiment from './review-sentiment';

/** Compound */

const ListingDescriptionReviews: React.FC<ListingDescriptionReviewsProps> =
  React.memo(
    ({
      reviewsScorePerMonth,
      numberOfReviews,
      allReviewsButton,
      reviewSentiments,
      guestsReviews,
    }) => {
      return (
        <VStack spacing={4} alignItems='flex-start'>
          <Heading as='h3' size='lg'>
            Reviews
          </Heading>
          <Grid
            borderColor='gray.200'
            borderRadius='xl'
            borderWidth={1}
            paddingY={8}
            templateRows='min-content'
            templateColumns={{
              md: '35% min-content 1fr',
            }}
            rowGap={8}
            width='full'
          >
            <VStack
              alignContent='center'
              justifyContent='space-between'
              paddingX={8}
              spacing={8}
            >
              <Box>
                <HStack justifyContent='center' alignItems='center'>
                  <Icon as={HiStar} color='red.500' boxSize={8} />
                  <Heading as='h3' size='xl' fontWeight='extrabold'>
                    {reviewsScorePerMonth}
                  </Heading>
                </HStack>
                <Text fontSize='sm' color='gray.600'>
                  Based on {numberOfReviews} reviews
                </Text>
              </Box>
              <Button> {allReviewsButton}</Button>
            </VStack>
            <Divider
              orientation='vertical'
              display={['none', 'none', 'flex']}
            />
            <VStack spacing={6} alignItems='flex-start' paddingX={8}>
              {reviewSentiments.map((sentiment) => (
                <ReviewSentiment key={sentiment.type} {...sentiment} />
              ))}
            </VStack>
          </Grid>
          <VStack spacing={8} alignItems='flex-start'>
            {guestsReviews.map((review) => (
              <ReviewCard key={review.shortReviewTitle} {...review} />
            ))}
          </VStack>
        </VStack>
      );
    }
  );

export default ListingDescriptionReviews;
