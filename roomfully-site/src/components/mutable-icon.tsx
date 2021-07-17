import { Center, Icon } from '@chakra-ui/react';
import * as React from 'react';
import { BiBed } from 'react-icons/bi';
import { FiUsers } from 'react-icons/fi';
import {
  HiOutlineDocumentReport,
  HiOutlineGlobe,
  HiOutlineHome,
  HiOutlineMail
} from 'react-icons/hi';
import type { MutableIconProps } from '../models/mutable-icon';

/** Compound */

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
    case 'reviews':
      return HiOutlineMail;
    case 'documents':
      return HiOutlineDocumentReport;
    case 'languages':
      return HiOutlineGlobe;
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
        <Icon as={getIcon(mutableIconType)} color='gray.500' boxSize={5} />
      </Center>
    );
  }
);

export default MutableIcon;
