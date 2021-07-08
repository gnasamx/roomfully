import {
  Box,
  Button,
  HStack,
  Image,
  Link,
  Text,
  VStack,
  SimpleGrid,
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
}

export interface CountryCardsProps {
  countryCards: CountryCardProps[];
}

const CountryCard = ({
  image,
  countryName,
  apartmentsCount,
  cta,
}: CountryCardProps) => {
  return (
    <Box
      as='div'
      display='flex'
      flexDirection='column'
      boxShadow='md'
      borderRadius={16}
      overflow='hidden'
    >
      <Box flexShrink={0} borderTopRadis={16}>
        <Image
          src={image.src}
          alt={image.alt}
          objectFit='cover'
          objectPosition='center'
        />
      </Box>
      <HStack
        padding={5}
        alignItems='center'
        justifyContent='space-between'
        width='full'
      >
        <VStack alignItems='flex-start'>
          <Text fontWeight='bold'>{countryName}</Text>
          <Text>{apartmentsCount} apartments</Text>
        </VStack>
        <Button colorScheme='pink'>
          <Link as={ReachLink} to={cta.url}>
            {cta.label}
          </Link>
        </Button>
      </HStack>
    </Box>
  );
};

const CountryCards = ({ countryCards }: CountryCardsProps) => {
  return (
    <SimpleGrid columns={[1, null, 2, 3]} spacing={10}>
      {countryCards.map((countryCard) => (
        <CountryCard {...countryCard} key={countryCard.countryName} />
      ))}
    </SimpleGrid>
  );
};

export default CountryCards;
