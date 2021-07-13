import { Box, Grid, Image, LinkBox, LinkOverlay, Text } from '@chakra-ui/react';
import * as React from 'react';
import { Link as ReachLink } from 'react-router-dom';
import type { FromPriceOrPricePerNightProps } from '../models/from-price-or-price-per-night';
import AbstractReviewsScore from './abstract-reviews-score';
import FromPriceOrPricePerNight from './from-price-or-price-per-night';

interface ListingCardWithReviewsAndCaptionProps
  extends Pick<FromPriceOrPricePerNightProps, 'price'> {
  image: {
    src: string;
    alt: string;
  };
  name: string;
  propertyType: string;
  caption: string;
  reviewsScorePerMonth: number;
  listingUrl: string;
}

/** Molecule */

const ListingCardWithReviewsAndCaption: React.FC<ListingCardWithReviewsAndCaptionProps> =
  React.memo(
    ({
      image,
      name,
      caption,
      propertyType,
      price,
      reviewsScorePerMonth,
      listingUrl,
    }) => {
      return (
        <LinkBox>
          <Grid
            padding={[4, null, 3]}
            borderRadius='md'
            borderColor='gray.200'
            borderWidth={1}
            templateColumns={['1fr', null, 'auto 1fr']}
            gap={4}
          >
            <Box flexShrink={0}>
              <Image
                borderRadius='md'
                width={['auto', null, 40]}
                height={['auto', null, 28]}
                src={image.src}
                alt={image.alt}
                loading='lazy'
              />
            </Box>
            <Grid templateRows='1fr auto' rowGap={3} width='full'>
              <Box>
                <Text fontWeight='semibold' fontSize='lg'>
                  <LinkOverlay as={ReachLink} to={listingUrl}>
                    {name}
                  </LinkOverlay>
                </Text>
                <Text fontSize='sm' color='gray.600'>
                  {propertyType}
                </Text>
                <Text fontSize='sm' color='gray.600'>
                  {caption}
                </Text>
              </Box>
              <Grid templateColumns='1fr auto'>
                <AbstractReviewsScore
                  reviewsScorePerMonth={reviewsScorePerMonth}
                />
                <FromPriceOrPricePerNight
                  price={price}
                  calculatePriceType='relatively'
                />
              </Grid>
            </Grid>
          </Grid>
        </LinkBox>
      );
    }
  );

export default ListingCardWithReviewsAndCaption;
