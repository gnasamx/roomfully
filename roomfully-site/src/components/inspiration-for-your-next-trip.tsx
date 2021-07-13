import { Heading, SimpleGrid, Text } from '@chakra-ui/react';
import * as React from 'react';
import { InspirationCardProps } from '../models/inspiration-card';
import InspirationCard from './inspiration-card';

interface InspirationForYourNextTripProps {
  header: string;
  description: string;
  inspirations: InspirationCardProps[];
}

/** Compound */

const InspirationForYourNextTrip: React.FC<InspirationForYourNextTripProps> =
  React.memo(({ header, description, inspirations }) => {
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
            <React.Fragment key={inspiration.name}>
              <InspirationCard {...inspiration} />
            </React.Fragment>
          ))}
        </SimpleGrid>
      </SimpleGrid>
    );
  });

export default InspirationForYourNextTrip;
