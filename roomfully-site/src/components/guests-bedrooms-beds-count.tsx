import * as React from 'react';
import type { GuestsBedroomsBedsCountProps } from '../models/guests-bedrooms-beds-count';
import { Text, Box, Icon } from '@chakra-ui/react';
import { BsDot } from 'react-icons/bs';

const GuestsBedroomsBedsCount: React.FC<GuestsBedroomsBedsCountProps> =
  React.memo(({ guests, bedrooms, beds }) => {
    return (
      <Box as='span' color='gray.600'>
        <Text as='span'>{guests} guests</Text>
        <Icon as={BsDot} display='inline' marginX={1} />
        <Text as='span'>{bedrooms} bedrooms</Text>
        <Icon as={BsDot} display='inline' marginX={1} />
        <Text as='span'>{beds} beds</Text>
      </Box>
    );
  });

export default GuestsBedroomsBedsCount;
