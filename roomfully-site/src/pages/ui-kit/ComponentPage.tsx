import { Box, Button, Code, Heading, Text } from '@chakra-ui/react';
import * as React from 'react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import { useParams } from 'react-router-dom';
import * as components from '../../components';
import { camelCase, upperFirst } from '../../utils/strings';
import * as configs from './component-configs';

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

const ComponentExample = ({
  label,
  Component,
  props,
}: {
  label: string;
  Component: any;
  props: any;
}) => {
  const stringify = (props: any) => {
    return JSON.stringify(
      props,
      (key, value) => {
        if (typeof value === 'function') return '<function>';
        return value;
      },
      2
    );
  };

  return (
    <>
      <div className='container my-5'>
        <h2>{label}</h2>
        <h3>Example:</h3>
      </div>
      <div>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Component {...props} />
        </ErrorBoundary>
      </div>
      <details className='container my-5'>
        <Heading as='h3'>Config:</Heading>
        <Code width='full'>
          <pre>{stringify(props)}</pre>
        </Code>
      </details>
    </>
  );
};

const ComponentPage = () => {
  let { id }: { id: string } = useParams();
  id = upperFirst(camelCase(id));
  // @ts-ignore
  const config = configs[id];
  // @ts-ignore
  const Component = components[id];

  console.log('component: ', { id, config, Component });

  if (!config || !Component) return <Box>NOT FOUND</Box>;

  const { name, examples } = config;
  const title = `${name}`;

  return (
    <Box as='section'>
      <Heading>{title}</Heading>
      {examples.map((example: any, i: number) => (
        <ComponentExample
          key={'component-example-' + i}
          Component={Component}
          {...example}
        />
      ))}
    </Box>
  );
};

export default ComponentPage;
