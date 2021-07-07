import { Container, Heading, ListItem, UnorderedList } from '@chakra-ui/react';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { PageTitle } from '../../components';
import { kebabCase } from '../../utils/strings';
import * as configs from './component-configs';

const ComponentsPage = () => {
  return (
    <>
      <PageTitle title='Components' />
      <Container as='section' maxW='container.xl'>
        <Heading>Components</Heading>
        <UnorderedList>
          {Object.keys(configs)
            ?.sort()
            ?.map((name) => {
              return (
                <ListItem key={name}>
                  <Link to={`/ui-kit/components/${kebabCase(name)}`}>
                    {/* @ts-ignore */}
                    {configs?.[name].name}
                  </Link>
                </ListItem>
              );
            })}
        </UnorderedList>
      </Container>
    </>
  );
};
export default ComponentsPage;
