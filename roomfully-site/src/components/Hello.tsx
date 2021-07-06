import * as React from 'react';
import { Text } from '@chakra-ui/react';

export interface HelloProps {
  message: string;
}

const Hello = ({ message }: HelloProps) => {
  return <Text>{message}</Text>;
};

export default Hello;
