import { Box, Flex, Image, Text } from '@chakra-ui/react';
import * as React from 'react';

interface PropertyTypeCardProps {
  image: {
    src: string;
    alt: string;
  };
  name: string;
  roomType: string;
  numberOfProperties: number;
  propertyUrl: string;
}

const PropertyTypeCard: React.FC<PropertyTypeCardProps> = React.memo(
  ({ image, name, numberOfProperties, roomType }) => {
    return (
      <Flex flexDirection='column' borderRadius='xl' overflow='hidden'>
        <Image
          src={image.src}
          alt={image.alt}
          objectFit='cover'
          objectPosition='center'
          loading='lazy'
        />
        <Box
          padding={5}
          alignItems='center'
          justifyContent='space-between'
          borderColor='gray.200'
          borderLeftWidth={1}
          borderRightWidth={1}
          borderBottomWidth={1}
          borderBottomRadius='xl'
          width='full'
          height='full'
        >
          <Text fontWeight='semibold'>{name}</Text>
          <Text fontSize='sm' color='gray.600'>
            {numberOfProperties} {roomType.toLowerCase()}
          </Text>
        </Box>
      </Flex>
    );
  }
);

export default PropertyTypeCard;
