import { StellarWalletsKit } from "@creit-tech/stellar-wallets-kit/sdk";
import { defaultModules } from "@creit-tech/stellar-wallets-kit/modules/utils";
import { WalletConnectModule } from "@creit-tech/stellar-wallets-kit/modules/wallet-connect";
import { SwkAppDarkTheme } from "@creit-tech/stellar-wallets-kit/types";

// 1. Initialize SWK (WalletConnect + all other wallets)
StellarWalletsKit.init({
  theme: SwkAppDarkTheme,
  modules: [
    ...defaultModules(),   // Lobstr extension + Albedo + XBull + Freighter + Rabet
    new WalletConnectModule({
      projectId: "48b7bf0dacf7920c182f112b3cc388a8",   // yours
      metadata: {
        name: "PortalX LITE",
        description: "PortalX LITE Wallet Connector",
        icons: ["https://legacygold.github.io/portalx-lite-test/icon.PNG"],
        url: "https://legacygold.github.io/portalx-lite-test/",
      }
    })
  ]
});

// 2. Insert Connect button
const buttonWrapper = document.querySelector("#buttonWrapper");
StellarWalletsKit.createButton(buttonWrapper);

// 3. Connect modal handler
buttonWrapper.addEventListener("click", async () => {
  try {
    const { address } = await StellarWalletsKit.authModal();
    console.log("CONNECTED:", address);
    alert("Connected wallet:\n" + address);
  } catch (err) {
    console.error("Connection error:", err);
  }
});
