// IMPORTS
// ------------------------------------------------------------
import React from 'react';
import {Link} from 'react-router-dom';

// Layout Components
import FullPageLayout from '../../layouts/FullPage';

// Styled Components
import {NotFoundPageStyles} from './styles';

// MAIN PAGE COMPONENT
// ------------------------------------------------------------
const NotFoundPage = () => {
  return (
    <FullPageLayout>
      <NotFoundPageStyles>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <h2>Not Found</h2>
              <hr />
              <p>
                Page not found, go back <Link to="/">Home</Link>.
              </p>
            </div>
          </div>
        </div>
      </NotFoundPageStyles>
    </FullPageLayout>
  );
};

// EXPORTS
// ------------------------------------------------------------
export default NotFoundPage;
