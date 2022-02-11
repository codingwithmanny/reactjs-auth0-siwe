// IMPORTS
// ------------------------------------------------------------
import { Switch, Route, Redirect } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

// Route Components
import PrivateRoute from './private';

// Page Components
import LoginPage from '../pages/Login';
import DashboardPage from '../pages/Dashboard';
import AccountPage from '../pages/Account';
import NotFoundPage from '../pages/NotFound';
import SetupPage from '../pages/Setup';
import AppLoader from '../components/AppLoader';

// Hooks
import { useWallet } from '../providers/walletProvider';

// MAIN ROUTE COMPONENT
// ------------------------------------------------------------
const Routes = () => {
  const context = useWallet();
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <AppLoader />;

  return (
    <Switch>
      <Route
        path="/"
        exact
        render={() => (isAuthenticated
          ? context?.address
            ? <Redirect to="/dashboard" />
            : <Redirect to="/setup" />
          : <Redirect to="/login" />)}
      />
      <Route
        path="/login"
        exact
        render={() => (isAuthenticated
          ? context?.address
            ? <Redirect to="/dashboard" />
            : <Redirect to="/setup" />
          : <LoginPage />)}
      />
      <PrivateRoute path="/setup" exact
        render={() =>
          !context?.address
            ? <SetupPage />
            : <Redirect to="/dashboard" />
        } />
      <PrivateRoute path="/dashboard" exact component={DashboardPage} />
      <PrivateRoute path="/account" exact component={AccountPage} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  );
};

// EXPORTS
// ------------------------------------------------------------
export default Routes;
