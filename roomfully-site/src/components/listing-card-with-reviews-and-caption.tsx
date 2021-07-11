import {
  Box,
  Grid,
  HStack,
  Image,
  LinkBox,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import * as React from 'react';
import { HiStar } from 'react-icons/hi';

interface ListingCardWithReviewsAndCaptionProps {
  image: {
    src: string;
    alt: string;
  };
  name: string;
  propertyType: string;
  caption: string;
  price: number;
  reviewsPerMonth: number;
  listingUrl: string;
}

function decideRatingAppearance(reviewsPerMonth: number) {
  if (reviewsPerMonth > 4) {
    return {
      backgroundColor: 'green.300',
      iconColor: 'white',
      label: 'Excellent',
    };
  } else if (reviewsPerMonth > 3) {
    return {
      backgroundColor: 'yellow.300',
      iconColor: 'white',
      label: 'Good',
    };
  } else {
    return {
      backgroundColor: 'green.500',
      iconColor: 'white',
      label: 'Excellent',
    };
  }
}

function Rating({ reviewsPerMonth }: { reviewsPerMonth: number }) {
  const { backgroundColor, iconColor, label } =
    decideRatingAppearance(reviewsPerMonth);
  return (
    <HStack>
      <Box
        backgroundColor={backgroundColor}
        w={6}
        h={6}
        borderRadius={6}
        display='flex'
        alignItems='center'
        justifyContent='center'
      >
        <HiStar color={iconColor} />
      </Box>
      <Text fontSize='sm' fontWeight='semibold'>
        {label}
      </Text>
    </HStack>
  );
}

const ListingCardWithReviewsAndCaption: React.FC<ListingCardWithReviewsAndCaptionProps> =
  ({
    image,
    name,
    caption,
    propertyType,
    price,
    reviewsPerMonth,
    listingUrl,
  }) => {
    return (
      <LinkBox>
        <HStack
          padding={2}
          borderRadius={4}
          borderColor='gray.200'
          borderWidth={1}
          spacing={4}
          alignContent='space-between'
        >
          <Box flexShrink={0}>
            <Image
              borderRadius='md'
              width={40}
              height={28}
              src={image.src}
              alt={image.alt}
              loading='lazy'
            />
          </Box>
          <Grid templateRows='1fr auto' rowGap={3} width='full'>
            <Box overflow='hidden'>
              <Text fontWeight='semibold' fontSize='lg' isTruncated>
                {/* <LinkOverlay as={ReachLink} to={listingUrl}> */}
                {name}
                {/* </LinkOverlay> */}
              </Text>
              <Text fontSize='sm' color='gray.600' isTruncated>
                {propertyType}
              </Text>
              <Text fontSize='sm' color='gray.600' isTruncated>
                {caption}
              </Text>
            </Box>
            <SimpleGrid templateColumns='1fr auto'>
              <Rating reviewsPerMonth={reviewsPerMonth} />
              <Box display='inline-flex'>
                <Text fontSize='sm' color='gray.600'>
                  from&nbsp;
                </Text>
                <Text fontWeight='semibold'>${price}</Text>
              </Box>
            </SimpleGrid>
          </Grid>
        </HStack>
      </LinkBox>
    );
  };

export default ListingCardWithReviewsAndCaption;
