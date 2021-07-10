import { Box, Code, Text } from '@chakra-ui/react';
import * as React from 'react';
import { FallbackProps } from 'react-error-boundary';

const ErrorFallback = React.memo(
  ({ error, resetErrorBoundary }: FallbackProps) => {
    return (
      <Box role='alert'>
        <Text>Something went wrong:</Text>
        <Code>{error.message}</Code>
      </Box>
    );
  }
);

export default ErrorFallback;
