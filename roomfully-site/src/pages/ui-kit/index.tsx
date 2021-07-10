import { Box } from '@chakra-ui/react';
import * as React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { PageTitle } from '../../components';
import ComponentPage from './component-page';
import ComponentsPage from './components-page';
import NotFoundPage from './not-found-page';

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
