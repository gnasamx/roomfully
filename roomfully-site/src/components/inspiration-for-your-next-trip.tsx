import {
  Box,
  Heading,
  HStack,
  Image,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import * as React from 'react';
import { Link as ReachLink } from 'react-router-dom';

interface Inspiration {
  image: {
    src: string;
    alt: string;
  };
  name: string;
  averagePrice: number;
  url: string;
}

interface InspirationForYourNextTripProps {
  header: string;
  description: string;
  inspirations: Inspiration[];
}

const InspirationCard: React.FC<Inspiration> = ({
  image,
  name,
  averagePrice,
  url,
}) => {
  return (
    <LinkBox>
      <HStack
        padding={3}
        borderRadius={4}
        borderColor='gray.200'
        borderWidth={1}
      >
        <Box flexShrink={0}>
          <Image
            borderRadius='md'
            width={16}
            height={16}
            src={image.src}
            alt={image.alt}
            loading='lazy'
          />
        </Box>
        <Box>
          <Text fontWeight='medium'>
            <LinkOverlay as={ReachLink} to={url}>
              {name}
            </LinkOverlay>
          </Text>
          <Text fontSize='sm' color='gray.600'>
            ${averagePrice}/night avg.
          </Text>
        </Box>
      </HStack>
    </LinkBox>
  );
};

const InspirationForYourNextTrip: React.FC<InspirationForYourNextTripProps> = ({
  header,
  description,
  inspirations,
}) => {
  return (
    <SimpleGrid gap={[5, 5, 5, 5]}>
      <SimpleGrid
        templateColumns={['1fr', '1fr', '1fr', '1fr 2fr']}
        gap={[4, 4, 4, 5]}
        alignItems='center'
      >
        <Heading as='h3' size='lg'>
          {header}
        </Heading>
        <Text color='gray.600'>{description}</Text>
      </SimpleGrid>
      <SimpleGrid columns={[1, 1, 2, 3]} spacing={4}>
        {inspirations.map((inspiration) => (
          <InspirationCard key={inspiration.name} {...inspiration} />
        ))}
      </SimpleGrid>
    </SimpleGrid>
  );
};

export default InspirationForYourNextTrip;
