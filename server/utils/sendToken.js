import { getFaucetHost, requestSuiFromFaucetV0 } from '@mysten/sui/faucet';

const fetchSuiFromFaucet = async () => {
  try {
    const recipientAddress = '0xcdcffc73b2e6de25d092e8e18755524586754402e8cc72d3428febd9c2cf1c96'; // Recipient's address
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
