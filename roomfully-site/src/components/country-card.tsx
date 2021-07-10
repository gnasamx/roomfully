import { Box, Button, Flex, Image, SimpleGrid, Text } from '@chakra-ui/react';
import * as React from 'react';
import { Link } from 'react-router-dom';

export interface CountryCardProps {
  image: {
    src: string;
    alt: string;
  };
  countryName: string;
  apartmentsCount: string;
  cta: {
    url: string;
    label: string;
  };
}

const CountryCard: React.FC<CountryCardProps> = React.memo(
  ({ image, countryName, apartmentsCount, cta }) => {
    return (
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
          <SimpleGrid
            templateColumns='1fr auto'
            columnGap={4}
            alignItems='center'
          >
            <Box>
              <Text fontWeight='semibold'>{countryName}</Text>
              <Text fontSize='sm' color='gray.600'>
                {apartmentsCount} apartments
              </Text>
            </Box>
            <Button colorScheme='purple'>
              <Link to={cta.url}>{cta.label}</Link>
            </Button>
          </SimpleGrid>
        </Box>
      </Flex>
    );
  }
);

export default CountryCard;
