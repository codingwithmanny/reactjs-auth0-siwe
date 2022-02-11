// IMPORTS
// ------------------------------------------------------------
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import WalletProvider from './walletProvider';

// ROOT PROVIDER
// ------------------------------------------------------------
const RootProvider: React.FC = ({ children }) => {
  return <div>
    <WalletProvider>
      <Auth0Provider
        domain={window.REACT_APP_AUTH0_DOMAIN}
        clientId={window.REACT_APP_AUTH0_CLIENT_ID}
        redirectUri={window.location.origin}
      >
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </Auth0Provider>
    </WalletProvider>
  </div>
}

// EXPORTS
// ------------------------------------------------------------
export default RootProvider;