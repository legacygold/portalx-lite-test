// ---------------------------------------------------------
// VERSION B — WalletConnect only featuring Lobstr
// ---------------------------------------------------------

import { StellarWalletsKit } from "@creit-tech/stellar-wallets-kit/sdk";
import { WalletConnectModule } from "@creit-tech/stellar-wallets-kit/modules/wallet-connect";
import { SwkAppDarkTheme } from "@creit-tech/stellar-wallets-kit/types";
import { KitEventType } from "@creit-tech/stellar-wallets-kit/types";

// 1️⃣ Init with ONLY WalletConnect module featuring Lobstr
StellarWalletsKit.init({
  theme: SwkAppDarkTheme,
  modules: new WalletConnectModule({
      projectId: "48b7bf0dacf7920c182f112b3cc388a8",
      featuredWalletIds: ['76a3d548a08cf402f5c7d021f24fd2881d767084b387a5325df88bc3d4b6f21b'], // Lobstr WalletConnect ID 
      metadata: {
        name: "PortalX LITE",
        description: "PortalX LITE Wallet Connector",
        icons: [ "https://legacygold.github.io/portalx-lite-test/icon.png" ],
        url: 'https://legacygold.github.io/portalx-lite-test/',
      }
    }),
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