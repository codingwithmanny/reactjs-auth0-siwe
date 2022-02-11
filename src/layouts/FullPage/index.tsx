// IMPORTS
// ------------------------------------------------------------
import React, {ReactNode} from 'react';

// Styled Components
import {FullPageStyles} from './styles';

// Types
interface FullPageTypes {
  children: ReactNode;
}

// MAIN LAYOUT COMPONENT
// ------------------------------------------------------------
const FullPageLayout = ({children}: FullPageTypes) => {
  return <FullPageStyles>{children}</FullPageStyles>;
};

// EXPORTS
// ------------------------------------------------------------
export default FullPageLayout;
