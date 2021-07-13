import { Flex, Text } from '@chakra-ui/react';
import * as React from 'react';
import type { FromPriceOrPricePerNightProps } from '../models/from-price-or-price-per-night';

/** Atom */

const FromPriceOrPricePerNight: React.FC<FromPriceOrPricePerNightProps> =
  React.memo(
    ({
      price,
      calculatePriceType,
      suffixAverage = false,
      useInsideBody = false,
    }) => {
      if (calculatePriceType === 'relatively') {
        return (
          <Flex display='inline-flex'>
            <Text color='gray.600' fontSize={useInsideBody ? 'sm' : ''}>
              from
            </Text>
            <Text
              as='span'
              fontWeight={useInsideBody ? 'normal' : 'semibold'}
              fontSize={useInsideBody ? 'sm' : ''}
            >
              &nbsp;${price}
            </Text>
            {suffixAverage && (
              <Text fontSize='sm' color='gray.600'>
                &nbsp;avg.
              </Text>
            )}
          </Flex>
        );
      } else {
        return (
          <Flex display='inline-flex'>
            <Text
              as='span'
              fontWeight={useInsideBody ? 'normal' : 'semibold'}
              fontSize={useInsideBody ? 'sm' : ''}
            >
              ${price}
            </Text>
            <Text color='gray.600' fontSize={useInsideBody ? 'sm' : ''}>
              {useInsideBody ? '' : <>&nbsp;</>}/
              {useInsideBody ? '' : <>&nbsp;</>}night
            </Text>
            {suffixAverage && (
              <Text fontSize='sm' color='gray.600'>
                &nbsp;avg.
              </Text>
            )}
          </Flex>
        );
      }
    }
  );

export default FromPriceOrPricePerNight;
