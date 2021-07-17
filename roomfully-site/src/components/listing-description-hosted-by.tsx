import {
  Box,
  Grid,
  HStack,
  Icon,
  Image,
  Link,
  Text,
  VStack
} from '@chakra-ui/react';
import * as React from 'react';
import { HiBadgeCheck } from 'react-icons/hi';
import { Link as ReachLink } from 'react-router-dom';
import type { ParticularProps } from '../models/particular';
import Particular from './particular';

/** Compound */

interface ListingDescriptionHostedByProps {
  hostProfilePicture: {
    src: string;
    alt: string;
  };
  hostName: string;
  hostSince: string;
  hostAbout: string;
  hostIsVerified: true;
  hostUrl: string;
  particulars: ParticularProps[];
}

const ListingDescriptionHostedBy: React.FC<ListingDescriptionHostedByProps> =
  React.memo(
    ({
      hostProfilePicture,
      hostName,
      hostAbout,
      hostIsVerified,
      hostSince,
      hostUrl,
      particulars,
    }) => {
      return (
        <VStack alignItems='flex-start' spacing={6}>
          <Grid
            templateColumns='max-content 1fr'
            width='full'
            columnGap={3}
            alignItems='center'
          >
            <Box flexShrink={0}>
              <Image
                src={hostProfilePicture.src}
                alt={hostProfilePicture.alt}
                borderRadius='md'
                objectFit='cover'
                width={12}
                height={12}
                loading='lazy'
              />
            </Box>
            <Box overflow='hidden'>
              <HStack>
                <Link
                  as={ReachLink}
                  to={hostUrl}
                  fontSize='lg'
                  fontWeight='semibold'
                  isTruncated
                >
                  {hostName}
                </Link>
                {hostIsVerified && (
                  <Icon as={HiBadgeCheck} color='green.400' boxSize={5} />
                )}
              </HStack>
              <Text color='gray.600' fontSize='sm'>
                Joined in {hostSince}
              </Text>
            </Box>
          </Grid>
          <Text color='gray.600'>{hostAbout}</Text>
          {particulars.map((particular) => (
            <Particular key={particular.particularType} {...particular} />
          ))}
        </VStack>
      );
    }
  );

export default ListingDescriptionHostedBy;
