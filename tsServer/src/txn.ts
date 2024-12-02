import { JsonRpcProvider, devnetConnection, TransactionBlock } from '@mysten/sui';

const provider = new JsonRpcProvider(devnetConnection); // Connect to devnet, change to Testnet/Mainnet if needed

const interactWithContract = async () => {
  try {
    const walletAddress = '<YOUR_WALLET_ADDRESS>'; // Replace with your Sui wallet address
    const packageId = '0x123456789abcdef'; // Replace with your actual Package ID
    const moduleName = 'mint_go_'; // The module name where `mintNFT` is located
    const functionName = 'mintNFT'; // The function name
    const arguments = ['NFT Name', 'NFT Description', 'https://example.com/image.png']; // Arguments for mintNFT function

    // Create a new Transaction Block
    const tx = new TransactionBlock();

    // Set the function call (using moveCall to invoke the function)
    tx.moveCall({
      target: `${packageId}::${moduleName}::${functionName}`,
      arguments: arguments.map(arg => tx.pure(arg)),
    });

    // Set the gas budget (increase if needed)
    const gas = await provider.requestSuiFromFaucet(walletAddress, 100000); // Adjust gas as needed
    tx.gasBudget = gas;

    // Send the transaction
    const response = await provider.executeTransactionBlock({
      transactionBlock: tx,
      sender: walletAddress,
    });

    console.log('Transaction Success:', response);
  } catch (error) {
    console.error('Error executing contract function:', error);
  }
};

// Execute the function
interactWithContract();
