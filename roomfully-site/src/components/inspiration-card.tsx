import {
  Box,
  HStack,
  Image,
  LinkBox,
  LinkOverlay,
  Text,
} from '@chakra-ui/react';
import * as React from 'react';
import { Link as ReachLink } from 'react-router-dom';
import type { InspirationCardProps } from '../models/inspiration-card';
import FromPriceOrPricePerNight from './from-price-or-price-per-night';

/** Molecule */

const InspirationCard: React.FC<InspirationCardProps> = React.memo(
  ({ image, name, price, url }) => {
    return (
      <LinkBox>
        <HStack
          padding={3}
          borderRadius={4}
          borderColor='gray.200'
          borderWidth={1}
        >
          <Box flexShrink={0}>
            <Image
              borderRadius='md'
              boxSize={16}
              src={image.src}
              alt={image.alt}
              loading='lazy'
            />
          </Box>
          <Box>
            <Text fontWeight='medium'>
              <LinkOverlay as={ReachLink} to={url}>
                {name}
              </LinkOverlay>
            </Text>
            <FromPriceOrPricePerNight
              price={price}
              calculatePriceType='relatively'
              suffixAverage
              useInsideBody
            />
          </Box>
        </HStack>
      </LinkBox>
    );
  }
);

export default InspirationCard;
