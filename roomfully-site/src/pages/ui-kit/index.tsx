import { Switch, Route, Link } from 'react-router-dom';
import * as React from 'react';
import { Box } from '@chakra-ui/react';
import ComponentsPage from './components-page';
import ComponentPage from './component-page';
import NotFoundPage from './not-found-page';
import { PageTitle } from '../../components';

const UiKitIndexPage = () => {
  return (
    <>
      <PageTitle title='Ui-Kit' />
      <Box as='section'>
        <Link to='/ui-kit/components/'>Components</Link>
      </Box>
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
