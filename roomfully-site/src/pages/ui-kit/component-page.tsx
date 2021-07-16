import { Box, Container, Heading, Text } from '@chakra-ui/react';
import * as React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { RouteComponentProps } from 'react-router-dom';
import * as components from '../../components';
import { ErrorFallback, PageTitle } from '../../components';
import { camelCase, upperFirst } from '../../utils/strings';
import * as atoms from './component-configs/atoms';
import * as compounds from './component-configs/compounds';
import * as molecules from './component-configs/molecules';

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
    <Box marginBottom={6}>
      <Text marginBottom={4}>{label}</Text>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Component {...props} />
      </ErrorBoundary>
    </Box>
  );
};

const ComponentInstance = ({ id, config, match }: any) => {
  // @ts-ignore
  const Component = components[id];

  if (!config || !Component) return <Box>NOT FOUND</Box>;

  const { name, examples } = config;
  const title = `${name}`;

  return (
    <>
      <PageTitle title={name} />
      <Heading as='h3' size='md' marginBottom={4}>
        {title}
      </Heading>
      <Box as='section'>
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
  const id = upperFirst(camelCase(match.params.id));
  // @ts-ignore
  const atomsConfig = atoms[id];
  // @ts-ignore
  const moleculesConfig = molecules[id];
  // @ts-ignore
  const compoundsConfig = compounds[id];

  return (
    <Container maxW='container.xl' padding={4}>
      {atomsConfig && (
        <ComponentInstance id={id} config={atomsConfig} match={match} />
      )}
      {moleculesConfig && (
        <ComponentInstance id={id} config={moleculesConfig} match={match} />
      )}
      {compoundsConfig && (
        <ComponentInstance id={id} config={compoundsConfig} match={match} />
      )}
    </Container>
  );
};

export default ComponentPage;
