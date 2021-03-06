import { Box, Grid, Image, Text } from '@chakra-ui/react';
import * as React from 'react';
import type { UserDetailsProps } from '../models/user-details';

/** Molecule */

const UserDetails: React.FC<UserDetailsProps> = React.memo(
  ({ profilePicture, name, reviewAddedOn }) => {
    return (
      <Grid
        templateColumns='max-content 1fr'
        width='full'
        columnGap={3}
        alignItems='center'
      >
        <Box flexShrink={0}>
          <Image
            src={profilePicture.src}
            alt={profilePicture.alt}
            borderRadius='md'
            objectFit='cover'
            boxSize={12}
            loading='lazy'
          />
        </Box>
        <Box overflow='hidden'>
          <Text fontWeight='semibold' isTruncated>
            {name}
          </Text>
          <Text color='gray.600' fontSize='sm'>
            {reviewAddedOn}
          </Text>
        </Box>
      </Grid>
    );
  }
);

export default UserDetails;
