// IMPORTS
// ------------------------------------------------------------
import React, { ReactNode } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

// Hooks
import { useWallet } from '../providers/walletProvider';

// Types
interface PrivateRouteTypes {
  component?: any;
  render?: any;
  redirectTo?: string;
  exact?: boolean;
  path: string | Array<string>;
  children?: ReactNode;
}

// MAIN ROUTE COMPONENT
// ------------------------------------------------------------
const PrivateRoute = ({
  component: Component = null,
  render = null,
  redirectTo = '/login',
  exact,
  path,
  children,
  ...props
}: PrivateRouteTypes) => {
  const { isAuthenticated } = useAuth0();
  const context = useWallet();

  if (!isAuthenticated) {
    return <Redirect to={redirectTo} />;
  }

  console.log(context?.address);
  if (!context?.address && path !== '/setup') {
    return <Redirect to={'/setup'} />;
  }

  if (render || Component) {
    return (
      <Route
        {...props}
        exact={exact}
        path={path}
        render={(routerProps) => (render ? render(routerProps) : <Component {...routerProps} />)}
      />
    );
  }

  return (
    <Route {...props} exact={exact} path={path}>
      {children}
    </Route>
  );
};

// EXPORTS
// ------------------------------------------------------------
export default PrivateRoute;
