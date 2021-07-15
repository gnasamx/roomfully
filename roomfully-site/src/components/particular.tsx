import { Box, HStack, Text } from '@chakra-ui/react';
import * as React from 'react';
import type { ParticularProps } from '../models/particular';
import MutableIcon from './mutable-icon';

/** Molecule */

const Particular: React.FC<ParticularProps> = React.memo(
  ({ title, caption, particularType }) => {
    return (
      <HStack width='full' spacing={3} alignItems='flex-start'>
        <MutableIcon mutableIconType='home' />
        <Box>
          <Text fontWeight='semibold'>{title}</Text>
          <Text color='gray.600'>{caption}</Text>
        </Box>
      </HStack>
    );
  }
);

export default Particular;
