import { Center, Icon } from '@chakra-ui/react';
import * as React from 'react';
import { HiOutlineHome } from 'react-icons/hi';
import type { MutableIconProps } from '../models/mutable-icon';

/** Icon */

const MutableIcon: React.FC<MutableIconProps> = React.memo(
  ({ mutableIconType }) => {
    return (
      <Center
        width={12}
        height={12}
        backgroundColor='gray.100'
        borderRadius='md'
      >
        <Icon as={HiOutlineHome} color='gray.500' width={5} height={5} />
      </Center>
    );
  }
);

export default MutableIcon;
