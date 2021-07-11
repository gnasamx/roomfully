import {
  Container,
  Heading,
  Link,
  ListItem,
  SimpleGrid,
  UnorderedList,
} from '@chakra-ui/react';
import * as React from 'react';
import { Link as ReachLink } from 'react-router-dom';
import { PageTitle } from '../../components';
import { kebabCase } from '../../utils/strings';
import * as atoms from './component-configs/atoms';
import * as compounds from './component-configs/compounds';
import * as molecules from './component-configs/molecules';

const ComponentsList = (configs: any) => {
  console.log('configs: ', configs);
  return (
    <UnorderedList>
      {Object.keys(configs)
        ?.sort()
        ?.map((name) => {
          return (
            <ListItem key={name}>
              <Link as={ReachLink} to={`/ui-kit/components/${kebabCase(name)}`}>
                {/* @ts-ignore */}
                {configs?.[name].name}
              </Link>
            </ListItem>
          );
        })}
    </UnorderedList>
  );
};

const ComponentsPage = () => {
  return (
    <>
      <PageTitle title='Components' />
      <Container as='section' maxW='container.xl'>
        <Heading>Components</Heading>
        <SimpleGrid columns={3} spacing={4}>
          <ComponentsList configs={atoms} />
          <ComponentsList configs={molecules} />
          <ComponentsList configs={compounds} />
          <ComponentsList />
        </SimpleGrid>
      </Container>
    </>
  );
};
export default ComponentsPage;
