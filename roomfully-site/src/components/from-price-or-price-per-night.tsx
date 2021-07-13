import { Flex, Text } from '@chakra-ui/react';
import * as React from 'react';
import type { FromPriceOrPricePerNightProps } from '../models/from-price-or-price-per-night';

/** Atom */

const FromPriceOrPricePerNight: React.FC<FromPriceOrPricePerNightProps> =
  React.memo(({ price, calculatePriceType, suffixAverage }) => {
    if (calculatePriceType === 'relatively') {
      return (
        <Flex display='inline-flex'>
          <Text color='gray.600'>from&nbsp;</Text>
          <Text as='span' fontWeight='semibold'>
            ${price}&nbsp;
          </Text>
          {suffixAverage && (
            <Text fontSize='sm' color='gray.600'>
              avg.
            </Text>
          )}
        </Flex>
      );
    } else {
      return (
        <Flex display='inline-flex'>
          <Text as='span' fontWeight='semibold'>
            ${price}&nbsp;
          </Text>
          <Text color='gray.600'>/ night&nbsp;</Text>
          {suffixAverage && (
            <Text fontSize='sm' color='gray.600'>
              avg.
            </Text>
          )}
        </Flex>
      );
    }
  });

export default FromPriceOrPricePerNight;
