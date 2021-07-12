import {
  Box,
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

const ComponentsList = ({ configs, type }: any) => {
  return (
    <Box
      as='section'
      borderWidth={1}
      borderColor='gray.200'
      padding={4}
      borderRadius='md'
    >
      <Heading as='h3' size='md' mb={3}>
        {type}
      </Heading>
      <UnorderedList>
        {Object.keys(configs)
          ?.sort()
          ?.map((name) => {
            return (
              <ListItem key={name}>
                <Link
                  as={ReachLink}
                  to={`/ui-kit/components/${kebabCase(name)}`}
                >
                  {/* @ts-ignore */}
                  {configs?.[name].name}
                </Link>
              </ListItem>
            );
          })}
      </UnorderedList>
    </Box>
  );
};

const ComponentsPage = () => {
  return (
    <>
      <PageTitle title='Components' />
      <Container as='section' maxW='container.xl' padding={4}>
        <Heading mb={4}>Components</Heading>
        <SimpleGrid columns={[1, null, 3]} spacing={4}>
          <ComponentsList type='Atoms' configs={atoms} />
          <ComponentsList type='Molecules' configs={molecules} />
          <ComponentsList type='Compounds' configs={compounds} />
        </SimpleGrid>
      </Container>
    </>
  );
};
export default ComponentsPage;
