"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const faucet_1 = require("@mysten/sui/faucet");
const fetchSuiFromFaucet = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const recipientAddress = '0x3b87db4f8cae9e35ffb6df2e55946761e2820cc651eeeac80745680fd1b8f1a5'; // Recipient's address
        const faucetHost = (0, faucet_1.getFaucetHost)('devnet'); // Devnet faucet host
        // Request SUI tokens from the faucet
        yield (0, faucet_1.requestSuiFromFaucetV0)({
            host: faucetHost,
            recipient: recipientAddress,
        });
        console.log(`SUI tokens successfully sent to ${recipientAddress}`);
    }
    catch (error) {
        console.error('Error requesting SUI from faucet:', error);
    }
});
// Execute the faucet request
fetchSuiFromFaucet();
