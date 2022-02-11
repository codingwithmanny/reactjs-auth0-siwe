// IMPORTS
// ------------------------------------------------------------
import React from 'react';

// Layout Components
import DashboardLayout from '../../layouts/Dashboard';

// Styled Components
import {DashboardPageStyles} from './styles';

// MAIN PAGE COMPONENT
// ------------------------------------------------------------
const DashboardPage = () => {
  return (
    <DashboardLayout>
      <DashboardPageStyles>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <h2>Dashboard</h2>
              <hr />
              <p>Welcome.</p>
            </div>
          </div>
        </div>
      </DashboardPageStyles>
    </DashboardLayout>
  );
};

// EXPORTS
// ------------------------------------------------------------
export default DashboardPage;
