// ---------------------------------------------------------
// VERSION A — defaultModules (recommended starting point)
// ---------------------------------------------------------

import { StellarWalletsKit } from "@creit-tech/stellar-wallets-kit/sdk";
import { defaultModules } from '@creit-tech/stellar-wallets-kit/modules/utils';
import { SwkAppDarkTheme } from "@creit-tech/stellar-wallets-kit/types";
import { KitEventType } from "@creit-tech/stellar-wallets-kit/types";

// 1️⃣ Init using DEFAULT MODULES (includes WalletConnect)
StellarWalletsKit.init({
  theme: SwkAppDarkTheme,
  modules: defaultModules(),
});

// 2️⃣ Insert button
const buttonWrapper = document.querySelector("#buttonWrapper");

StellarWalletsKit.createButton(buttonWrapper);

// 3️⃣ Events
StellarWalletsKit.on(KitEventType.STATE_UPDATED, (e) => {
  console.log("STATE UPDATED:", e);
});
StellarWalletsKit.on(KitEventType.DISCONNECT, () => {
  console.log("Wallet disconnected.");
});

// 4️⃣ Connect wallet, authenticate, and sign transaction
const {address} = await StellarWalletsKit.authModal();

console.log("Connected Stellar Address:", address);

const {signedTxXdr} = await StellarWalletsKit.signTransaction(tx.toXDR(), {
  networkPassphrase: Networks.PUBLIC,
  address,
});

console.log("Signed Transaction:", signedTxXdr);
