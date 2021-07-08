import { Box, Text, Code, Button } from '@chakra-ui/react';
import * as React from 'react';
import { FallbackProps } from 'react-error-boundary';

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <Box role='alert'>
      <Text>Something went wrong:</Text>
      <Code>{error.message}</Code>
      <Button variant='ghost' onClick={resetErrorBoundary}>
        Try again
      </Button>
    </Box>
  );
};

export default ErrorFallback;
