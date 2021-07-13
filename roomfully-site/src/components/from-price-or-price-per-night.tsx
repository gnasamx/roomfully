import { Flex, Text } from '@chakra-ui/react';
import * as React from 'react';
import type { FromPriceOrPricePerNightProps } from '../models/from-price-or-price-per-night';

/** Atom */

const FromPriceOrPricePerNight: React.FC<FromPriceOrPricePerNightProps> =
  React.memo(({ price, calculatePriceType, suffixAverage }) => {
    return (
      <Flex
        display='inline-flex'
        flexDirection={
          calculatePriceType === 'relatively' ? 'row-reverse' : 'row'
        }
      >
        <Text as='span' fontWeight='semibold'>
          ${price}
        </Text>
        &nbsp;
        <Text fontSize='sm' color='gray.600'>
          {calculatePriceType === 'relatively' ? 'from' : '/ night '}
        </Text>
        &nbsp;
        {suffixAverage && (
          <Text fontSize='sm' color='gray.600'>
            avg.
          </Text>
        )}
      </Flex>
    );
  });

export default FromPriceOrPricePerNight;
