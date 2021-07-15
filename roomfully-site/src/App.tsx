import { ChakraProvider } from '@chakra-ui/react';
import * as React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ErrorFallback } from './components';
import Site from './pages/site';
import UiKit from './pages/ui-kit';
import theme from './theme';

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
