import { Box, Button, ChakraProvider, Code, Text, theme } from '@chakra-ui/react';
import * as React from 'react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Site from './pages/site';
import UiKit from './pages/ui-kit';

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
        <Route path='/' component={Site} />
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
