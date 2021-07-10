import {
  Box,
  Button,
  Flex,
  Image,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import * as React from 'react';
import { Link as ReachLink } from 'react-router-dom';

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
  countryUrl: string;
}

const CountryCard: React.FC<CountryCardProps> = React.memo(
  ({ image, countryName, apartmentsCount, cta, countryUrl }) => {
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
            <SimpleGrid
              templateColumns='1fr auto'
              columnGap={4}
              alignItems='center'
            >
              <Box>
                <Text fontWeight='semibold'>
                  <LinkOverlay as={ReachLink} to={countryUrl}>
                    {countryName}
                  </LinkOverlay>
                </Text>
                <Text fontSize='sm' color='gray.600'>
                  {apartmentsCount} apartments
                </Text>
              </Box>
              <Button colorScheme='purple'>
                <ReachLink to={cta.url}>{cta.label}</ReachLink>
              </Button>
            </SimpleGrid>
          </Box>
        </Flex>
      </LinkBox>
    );
  }
);

export default CountryCard;
