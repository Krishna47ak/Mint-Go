import { getFaucetHost, requestSuiFromFaucetV0 } from '@mysten/sui/faucet';

const fetchSuiFromFaucet = async () => {
  try {
    const recipientAddress = '0x3b87db4f8cae9e35ffb6df2e55946761e2820cc651eeeac80745680fd1b8f1a5'; // Recipient's address
    const faucetHost = getFaucetHost('devnet'); // Devnet faucet host

    // Request SUI tokens from the faucet
    await requestSuiFromFaucetV0({
      host: faucetHost,
      recipient: recipientAddress,
    });

    console.log(`SUI tokens successfully sent to ${recipientAddress}`);
  } catch (error) {
    console.error('Error requesting SUI from faucet:', error);
  }
};

// Execute the faucet request
fetchSuiFromFaucet();