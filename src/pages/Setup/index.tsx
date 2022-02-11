// IMPORTS
// ------------------------------------------------------------
import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { ethers } from 'ethers';
import { SiweMessage } from 'siwe';

// Layout Components
import FullPageLayout from '../../layouts/FullPage';

// Styled Components
import { SetupPageStyles } from './styles';
import { useWallet } from '../../providers/walletProvider';

// Config
// ------------------------------------------------------------
const domain = window.location.host;
const origin = window.location.origin;
const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();

// MAIN PAGE COMPONENT
// ------------------------------------------------------------
const LoginPage = () => {
  // State / Props
  const { user } = useAuth0();
  const context = useWallet();
  const [connectedWallet, setConnectedWallet] = useState('');
  const [signature, setSignature] = useState('');
  const [message, setMessage] = useState<any>();

  // Functions
  /**
   * 
   */
  const connectWallet = async () => {
    const [account] = await provider.send('eth_requestAccounts', [])
      .catch(() => {
        console.log('user rejected request');
        return []
      });
    console.log(account);
    if (account) {
      setConnectedWallet(account);
    }
  }

  /**
   * 
   * @param address 
   * @param statement 
   * @returns 
   */
  const createSiweMessage = (address: string, statement: any) => {
    const message = new SiweMessage({
      domain,
      address,
      statement,
      uri: origin,
      version: '1',
      chainId: 1
    });
    return message.prepareMessage();
  };

  /**
   * 
   */
  const signInWithEthereum = async () => {
    const message = createSiweMessage(
      await signer.getAddress(),
      'Sign in with Ethereum to the app.'
    );
    setMessage(message);
    setSignature(await signer.signMessage(message))
  }

  /**
   * 
   */
  const onClickSetAccountAddress = () => {
    console.log('onClickSetAccountAddress');
    console.log(context?.updateAddress);
    if (context?.updateAddress) {
      context.updateAddress(ethers.utils.verifyMessage(message, signature).toLowerCase());
    }
  }

  // Hooks - Try and see if there is a wallet already connected
  useEffect(() => {
    const init = async () => {
      const [account] = await provider.send('eth_requestAccounts', [])
        .catch(() => {
          console.log('user rejected request');
          return []
        });
      console.log(account);
      if (account) {
        setConnectedWallet(account);
      }
    }
    init();
  }, [])

  return (
    <FullPageLayout>
      <SetupPageStyles>
        <div className="container-fluid">
          <div className="row">
            <div className="col col-12 col-md-8 offset-md-2">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title text-center">Account</h5>
                  {user ? (
                    <figure className="figure">
                      <img src={user.picture} className="rounded" alt={user.nickname}></img>
                      <figcaption className="figure-caption">{user.nickname}</figcaption>
                    </figure>
                  ) : null}
                  <pre>
                    <code>{JSON.stringify(user, null, ' ')}</code>
                  </pre>
                  {connectedWallet ? <span>
                    <p><strong>Connected Wallet</strong></p>
                    <code>{JSON.stringify(connectedWallet)}</code>
                    <button className="btn btn-secondary btn-block" onClick={signInWithEthereum}>
                      Sign/Verify Wallet
                    </button>
                    {signature ? <div>
                      <p><strong>Signature</strong></p>
                      <code>{JSON.stringify(signature)}</code>
                      <p><strong>Message</strong></p>
                      <code>{JSON.stringify(message)}</code>
                      <p><strong>Verify Signature</strong></p>
                      <code>{JSON.stringify(ethers.utils.verifyMessage(message, signature))}</code>

                      {ethers.utils.verifyMessage(message, signature).toLowerCase() === connectedWallet ? <div>
                        <h3>Wallet Signature Coming From Same Wallet</h3>
                        <button className="btn btn-secondary btn-block" onClick={onClickSetAccountAddress}>
                          Set Wallet Address
                        </button>
                      </div> : null}
                    </div>
                      : null}

                  </span> :
                    <button className="btn btn-secondary btn-block" onClick={connectWallet}>
                      Connect Wallet
                    </button>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </SetupPageStyles>
    </FullPageLayout>
  );
};

// EXPORTS
// ------------------------------------------------------------
export default LoginPage;
