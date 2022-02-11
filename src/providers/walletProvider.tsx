// IMPORTS
// ------------------------------------------------------------
import { createContext, useContext, useState } from "react";

// TYPES
// ------------------------------------------------------------

// CONFIG
// ------------------------------------------------------------
const WalletContext = createContext<{ address?: string, updateAddress?: (value: string) => void } | undefined>({ address: undefined, updateAddress: undefined });

// PROVIDER
// ------------------------------------------------------------
/**
 * 
 * @param param0 
 * @returns 
 */
const WalletProvider: React.FC = ({ children }) => {
  // State / Props
  const [address, setAddress] = useState('');

  /**
   * 
   * @param value 
   */
  const updateAddress = (value: string = '') => {
    console.log('updateAddress', value);
    setAddress(value);
  }

  // Render
  return <WalletContext.Provider value={{
    address,
    updateAddress
  }}>{children}</WalletContext.Provider>
}

// HOOK
// ------------------------------------------------------------
/**
 * 
 * @returns 
 */
const useWallet = () => useContext(WalletContext);

// EXPORTS
// ------------------------------------------------------------
export default WalletProvider;
export { WalletContext, useWallet };

