import { Container, Link } from '@chakra-ui/react';
import * as React from 'react';
import { Link as ReachLink, Route, Switch } from 'react-router-dom';
import { PageTitle } from '../../components';
import ComponentPage from './component-page';
import ComponentsPage from './components-page';
import NotFoundPage from './not-found-page';

const UiKitIndexPage = () => {
  return (
    <>
      <PageTitle title='Ui-Kit' />
      <Container as='section' maxWidth='container.xl' padding={4}>
        <Link as={ReachLink} to='/ui-kit/components/'>
          Components
        </Link>
      </Container>
    </>
  );
};

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/ui-kit/' component={UiKitIndexPage} />
      <Route exact path='/ui-kit/components/' component={ComponentsPage} />
      <Route exact path='/ui-kit/components/:id' component={ComponentPage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
};

export default Routes;
