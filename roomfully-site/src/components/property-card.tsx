import {
  Box,
  Flex,
  Image,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import * as React from 'react';
import { Link as ReachLink } from 'react-router-dom';
import type { FromPriceOrPricePerNightProps } from '../models/from-price-or-price-per-night';
import type { ReviewsIconWithCountsAndNoOfReviewsProps } from '../models/reviews-icon-with-counts-and-no-of-reviews';
import FromPriceOrPricePerNight from './from-price-or-price-per-night';
import ReviewsIconWithCountsAndNoOfReviews from './reviews-icon-with-counts-and-no-of-reviews';

interface PropertyCardProps
  extends ReviewsIconWithCountsAndNoOfReviewsProps,
    Pick<FromPriceOrPricePerNightProps, 'price'> {
  image: {
    src: string;
    alt: string;
  };
  name: string;
  propertyType: string;
  listingUrl: string;
}

/** Molecule */

const PropertyCard: React.FC<PropertyCardProps> = React.memo(
  ({
    image,
    name,
    propertyType,
    price,
    reviewsScorePerMonth,
    numberOfReviews,
    listingUrl,
  }) => {
    return (
      <LinkBox>
        <Flex flexDirection='column' borderRadius='xl' overflow='hidden'>
          <Image
            src={image.src}
            alt={image.alt}
            objectFit='cover'
            objectPosition='center'
            loading='lazy'
          />
          <Box
            padding={5}
            alignItems='center'
            justifyContent='space-between'
            borderColor='gray.200'
            borderLeftWidth={1}
            borderRightWidth={1}
            borderBottomWidth={1}
            borderBottomRadius='xl'
            width='full'
            height='full'
          >
            <Box marginBottom={4}>
              <Text fontWeight='semibold'>
                <LinkOverlay as={ReachLink} to={listingUrl}>
                  {name}
                </LinkOverlay>
              </Text>
              <Text fontSize='sm' color='gray.600'>
                {propertyType}
              </Text>
            </Box>
            <SimpleGrid
              templateColumns='1fr auto'
              columnGap={4}
              alignItems='center'
            >
              <FromPriceOrPricePerNight
                price={price}
                calculatePriceType='relatively'
              />
              <ReviewsIconWithCountsAndNoOfReviews
                reviewsScorePerMonth={reviewsScorePerMonth}
                numberOfReviews={numberOfReviews}
              />
            </SimpleGrid>
          </Box>
        </Flex>
      </LinkBox>
    );
  }
);

export default PropertyCard;
