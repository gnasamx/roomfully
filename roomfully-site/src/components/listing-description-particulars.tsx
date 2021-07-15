import { VStack } from '@chakra-ui/react';
import * as React from 'react';
import type { ParticularProps } from '../models/particular';
import Particular from './particular';

/** Compound */

interface ListingDescriptionParticularsProps {
  particulars: ParticularProps[];
}

const ListingDescriptionParticulars: React.FC<ListingDescriptionParticularsProps> =
  React.memo(({ particulars }) => {
    return (
      <VStack spacing={6} alignItems='flex-start'>
        {particulars.map((particular) => (
          <Particular key={particular.title} {...particular} />
        ))}
      </VStack>
    );
  });

export default ListingDescriptionParticulars;
