import { Box, Flex, HStack, Image, SimpleGrid, Text } from '@chakra-ui/react';
import * as React from 'react';
import { HiStar } from 'react-icons/hi';

interface PropertyCardProps {
  image: {
    src: string;
    alt: string;
  };
  name: string;
  propertyType: string;
  price: string;
  reviewPerMonth: number;
  numberOfReviews: number;
  listingUrl: string;
}

const PropertyCard: React.FC<PropertyCardProps> = React.memo(
  ({ image, name, propertyType, price, reviewPerMonth, numberOfReviews }) => {
    return (
      <Flex
        flexDirection='column'
        boxShadow='md'
        borderRadius='xl'
        overflow='hidden'
      >
        <Image
          src={image.src}
          alt={image.alt}
          objectFit='cover'
          objectPosition='center'
        />
        <Box
          padding={5}
          alignItems='center'
          justifyContent='space-between'
          width='full'
          height='full'
        >
          <Box mb={4}>
            <Text fontWeight='semibold'>{name}</Text>
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
                {reviewPerMonth}
              </Text>
              <Text fontSize='sm' color='gray.600'>
                ({numberOfReviews})
              </Text>
            </HStack>
          </SimpleGrid>
        </Box>
      </Flex>
    );
  }
);

export default PropertyCard;
