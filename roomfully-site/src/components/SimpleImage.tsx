import * as React from 'react';
import { Image } from '@chakra-ui/react';

export interface SimpleImageProps {
  src: string;
  alt: string;
}

const SimpleImage = ({ src, alt }: SimpleImageProps) => {
  return <Image src={src} alt={alt} />;
};

export default SimpleImage;
