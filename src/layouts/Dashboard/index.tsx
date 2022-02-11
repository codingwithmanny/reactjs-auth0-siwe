// IMPORTS
// ------------------------------------------------------------
import React, {ReactNode} from 'react';
import {Link} from 'react-router-dom';
import {useAuth0} from '@auth0/auth0-react';

// Styled Components
import {DashboardStyles} from './styles';

// Types
interface DashboardTypes {
  children: ReactNode;
}

// MAIN LAYOUT COMPONENT
// ------------------------------------------------------------
const DashboardLayout = ({children}: DashboardTypes) => {
  const {logout} = useAuth0();

  const onClickLogout = () => {
    logout({returnTo: window.location.origin});
  };

  return (
    <DashboardStyles>
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Auth0 Bootstrap App
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse d-md-flex justify-content-between"
              id="navbarNav"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/account">
                    Account
                  </Link>
                </li>
              </ul>
              <span className="navbar-text">
                <button
                  className="btn btn-sm btn-outline-secondary"
                  type="button"
                  onClick={onClickLogout}
                >
                  Log Out
                </button>
              </span>
            </div>
          </div>
        </nav>
        {children}
      </>
    </DashboardStyles>
  );
};

// EXPORTS
// ------------------------------------------------------------
export default DashboardLayout;
