import { Box, Heading, Text } from '@chakra-ui/react';
import * as React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { RouteComponentProps } from 'react-router-dom';
import * as components from '../../components';
import { ErrorFallback, PageTitle } from '../../components';
import { camelCase, upperFirst } from '../../utils/strings';
import * as atoms from './component-configs/atoms';
import * as compounds from './component-configs/compounds';
import * as molecules from './component-configs/compounds';

const ComponentExample = ({
  label,
  Component,
  props,
}: {
  label: string;
  Component: any;
  props: any;
}) => {
  return (
    <Box mb={6}>
      <Text mb={4}>{label}</Text>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Component {...props} />
      </ErrorBoundary>
    </Box>
  );
};

const ComponentInstance = ({ configs, match }: any) => {
  const id = upperFirst(camelCase(match.params.id));
  // @ts-ignore
  const config = configs[id];
  // @ts-ignore
  const Component = components[id];

  if (!config || !Component) return <Box>NOT FOUND</Box>;

  const { name, examples } = config;
  const title = `${name}`;

  return (
    <>
      <PageTitle title={name} />
      <Heading as='h3' size='md'>
        {title}
      </Heading>
      <Box as='section' maxW='container.xl'>
        {examples.map((example: any, i: number) => (
          <ComponentExample
            key={'component-example-' + i}
            Component={Component}
            {...example}
          />
        ))}
      </Box>
    </>
  );
};

const ComponentPage = ({ match }: RouteComponentProps<{ id: string }>) => {
  return (
    <>
      <ComponentInstance configs={atoms} match={match} />
      <ComponentInstance configs={molecules} match={match} />
      <ComponentInstance configs={compounds} match={match} />
    </>
  );
};

export default ComponentPage;
