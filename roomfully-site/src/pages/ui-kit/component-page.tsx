import { Box, Container, Heading, Text } from '@chakra-ui/react';
import * as React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { RouteComponentProps } from 'react-router-dom';
import * as components from '../../components';
import { ErrorFallback, PageTitle } from '../../components';
import { camelCase, upperFirst } from '../../utils/strings';
import * as configs from './component-configs';

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

const ComponentPage = ({ match }: RouteComponentProps<{ id: string }>) => {
  let id = match.params.id;
  id = upperFirst(camelCase(id));
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
      <Container as='section' maxW='container.xl'>
        <Heading mb={3}>{title}</Heading>
        {examples.map((example: any, i: number) => (
          <ComponentExample
            key={'component-example-' + i}
            Component={Component}
            {...example}
          />
        ))}
      </Container>
    </>
  );
};

export default ComponentPage;
