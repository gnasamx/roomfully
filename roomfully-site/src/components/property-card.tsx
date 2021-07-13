import {
  Box,
  Flex,
  HStack,
  Image,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import * as React from 'react';
import { HiStar } from 'react-icons/hi';
import { Link as ReachLink } from 'react-router-dom';

interface PropertyCardProps {
  image: {
    src: string;
    alt: string;
  };
  name: string;
  propertyType: string;
  price: string;
  reviewsScorePerMonth: number;
  numberOfReviews: number;
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
            <Box mb={4}>
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
              <Text fontWeight='semibold'>{price} / night</Text>
              <HStack spacing={1}>
                <HiStar color='tomato' />
                <Text fontWeight='semibold' fontSize='sm'>
                  {reviewsScorePerMonth}
                </Text>
                <Text fontSize='sm' color='gray.600'>
                  ({numberOfReviews})
                </Text>
              </HStack>
            </SimpleGrid>
          </Box>
        </Flex>
      </LinkBox>
    );
  }
);

export default PropertyCard;
