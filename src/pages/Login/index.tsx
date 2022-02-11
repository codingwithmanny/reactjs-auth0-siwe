// IMPORTS
// ------------------------------------------------------------
import React from 'react';
import {useAuth0} from '@auth0/auth0-react';

// Layout Components
import FullPageLayout from '../../layouts/FullPage';

// Styled Components
import {LoginPageStyles} from './styles';

// MAIN PAGE COMPONENT
// ------------------------------------------------------------
const LoginPage = () => {
  const {loginWithRedirect} = useAuth0();

  const onClickRegisterLogin = () => {
    loginWithRedirect();
  };

  return (
    <FullPageLayout>
      <LoginPageStyles>
        <div className="container-fluid">
          <div className="row">
            <div className="col col-12 col-md-4 offset-md-4 col-xl-2 offset-xl-5">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title text-center">Auth0 Bootstrap App</h5>
                  <button className="btn btn-secondary btn-block" onClick={onClickRegisterLogin}>
                    Login / Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LoginPageStyles>
    </FullPageLayout>
  );
};

// EXPORTS
// ------------------------------------------------------------
export default LoginPage;
