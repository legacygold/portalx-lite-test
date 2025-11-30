import { StellarWalletsKit } from "@creit-tech/stellar-wallets-kit/sdk";
import { SwkAppDarkTheme } from "@creit-tech/stellar-wallets-kit/types";
import { WalletConnectModule } from "@creit-tech/stellar-wallets-kit/modules/wallet-connect";
import { ButtonMode } from "@creit-tech/stellar-wallets-kit/components";
import { KitEventType } from "@creit-tech/stellar-wallets-kit/types";

StellarWalletsKit.init({
  theme: SwkAppDarkTheme,
  modules: [
    new WalletConnectModule({
      projectId: "48b7bf0dacf7920c182f112b3cc388a8",  
      metadata: {
        name: "PortalX Lite",
        description: "PortalX Lite Wallet Connector",
        url: "https://legacygold.github.io/portalx-lite-test/",
        icons: ["https://legacygold.github.io/portalx-lite-test/icon.png"]
      }
    }),
  ],
});

const buttonWrapper = document.querySelector('#buttonWrapper');

StellarWalletsKit.createButton(buttonWrapper, {
  mode: ButtonMode.free,
  classes: "btn btn-primary"
});

// EVENTS
StellarWalletsKit.on(KitEventType.STATE_UPDATED, (event) => {
  console.log("Updated:", event);
});

StellarWalletsKit.on(KitEventType.DISCONNECT, () => {
  console.log("Disconnected");
});

// ON CLICK
buttonWrapper.addEventListener("click", async () => {
  try {
    console.log("Opening auth modal...");
    const { address } = await StellarWalletsKit.authModal();
    console.log("Connected:", address);
  } catch (err) {
    console.error("Error:", err);
  }
});
