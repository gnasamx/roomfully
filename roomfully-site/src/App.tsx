import { Button, ChakraProvider, theme } from '@chakra-ui/react';
import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import { Box, Text, Code } from '@chakra-ui/react';
import UiKit from './pages/ui-kit/index';

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

const RouteSwitch = () => {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        // reset the state of your app so the error doesn't happen again
      }}
    >
      <Switch>
        <Route path='/ui-kit/' component={UiKit} />
      </Switch>
    </ErrorBoundary>
  );
};

export const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Route component={RouteSwitch} />
    </BrowserRouter>
  </ChakraProvider>
);
