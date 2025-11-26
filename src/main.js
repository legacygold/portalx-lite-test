import { StellarWalletsKit } from "@creit-tech/stellar-wallets-kit/sdk";
import { SwkAppDarkTheme } from "@creit-tech/stellar-wallets-kit/types";
import { LobstrModule } from "@creit-tech/stellar-wallets-kit/modules/lobstr";
import { ButtonMode } from '@creit-tech/stellar-wallets-kit/components';
import { KitEventType } from "@creit-tech/stellar-wallets-kit/types";

// 1. Init the kit
StellarWalletsKit.init({
  theme: SwkAppDarkTheme,
  modules: [
    new LobstrModule()
  ],
});

// 2. Render button
const buttonWrapper = document.querySelector('#buttonWrapper');
StellarWalletsKit.createButton(buttonWrapper, {
  mode: ButtonMode.free,
  classes: 'btn btn-primary'
});

// 3. Subscribe to state updates
StellarWalletsKit.on(KitEventType.STATE_UPDATED, e => {
  console.log("STATE UPDATED:", e.payload);
});

// 4. Subscribe to disconnect event
StellarWalletsKit.on(KitEventType.DISCONNECT, () => {
  console.log("Wallet disconnected");
});

