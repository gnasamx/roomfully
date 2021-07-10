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
      <Flex
        flexDirection='column'
        boxShadow='md'
        borderRadius='xl'
        overflow='hidden'
      >
        <Image
          src={image.src}
          alt={image.alt}
          objectFit='cover'
          objectPosition='center'
        />
        <Box
          padding={5}
          alignItems='center'
          justifyContent='space-between'
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
