import { Center, Icon } from '@chakra-ui/react';
import * as React from 'react';
import { HiOutlineHome, HiOutlineDocumentReport } from 'react-icons/hi';
import { BiBed } from 'react-icons/bi';
import { FiUsers } from 'react-icons/fi';
import type { MutableIconProps } from '../models/mutable-icon';

/** Atom */

const getIcon = (mutableIconType: MutableIconProps['mutableIconType']) => {
  switch (mutableIconType) {
    case 'home':
      return HiOutlineHome;
    case 'bedroom':
      return BiBed;
    case 'guests':
      return FiUsers;
    case 'cancellation-policy':
      return HiOutlineDocumentReport;
    default:
      break;
  }
};

const MutableIcon: React.FC<MutableIconProps> = React.memo(
  ({ mutableIconType }) => {
    return (
      <Center
        width={12}
        height={12}
        backgroundColor='gray.100'
        borderRadius='md'
        flexShrink={0}
      >
        <Icon
          as={getIcon(mutableIconType)}
          color='gray.500'
          width={5}
          height={5}
        />
      </Center>
    );
  }
);

export default MutableIcon;
