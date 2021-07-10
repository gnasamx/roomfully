import { Flex, Box, Button, Image, SimpleGrid, Text } from '@chakra-ui/react';
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
