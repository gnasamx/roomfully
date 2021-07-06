import { Link } from 'react-router-dom';
import { Box, Heading } from '@chakra-ui/react';
import * as React from 'react';
import * as configs from './component-configs';
import { kebabCase } from '../../utils/strings';

const ComponentsPage = () => {
  console.log('Object.keys(configs): ', typeof configs);
  return (
    <Box as='section'>
      <Heading>Components</Heading>
      <ul>
        {Object.keys(configs)
          ?.sort()
          ?.map((name) => {
            console.log('= 1 : ', kebabCase(name));
            return (
              <li key={name}>
                <Link to={`/ui-kit/components/${kebabCase(name)}`}>
                  {/* @ts-ignore */}
                  {configs?.[name].name}
                </Link>
              </li>
            );
          })}
      </ul>
    </Box>
  );
};
export default ComponentsPage;
