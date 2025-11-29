import { StellarWalletsKit } from "@creit-tech/stellar-wallets-kit/sdk";
import { SwkAppDarkTheme } from "@creit-tech/stellar-wallets-kit/types";
import { LobstrModule } from "@creit-tech/stellar-wallets-kit/modules/lobstr";
import { ButtonMode } from "@creit-tech/stellar-wallets-kit/components";
import { KitEventType } from "@creit-tech/stellar-wallets-kit/types";

// ---------------------------------------------------------
// 1️⃣  Initialize Kit (Theme + Modules)
// ---------------------------------------------------------
StellarWalletsKit.init({
  theme: SwkAppDarkTheme,
  modules: [
    new LobstrModule(),
  ],
});

// ---------------------------------------------------------
// 2️⃣  Create the Connect button
// ---------------------------------------------------------
const wrapper = document.querySelector("#buttonWrapper");

StellarWalletsKit.createButton(wrapper, {
  mode: ButtonMode.free,
  classes: "btn btn-primary"
});

// ---------------------------------------------------------
// 3️⃣  Wait for the button to exist, then bind to it
// ---------------------------------------------------------
setTimeout(() => {
  const btn = wrapper.querySelector("button");

  if (!btn) {
    console.error("Button not found!");
    return;
  }

  console.log("Attaching authModal to button…");

  btn.addEventListener("click", async () => {
    try {
      console.log("Opening Lobstr auth modal…");
      const { address } = await StellarWalletsKit.authModal();

      console.log("Connected wallet:", address);
      alert("Connected wallet:\n" + address);

    } catch (err) {
      console.error("Error during connection:", err);
    }
  });

}, 300); // ← small delay so the Kit has time to render the button

// ---------------------------------------------------------
// 4️⃣  Listen for STATE updates
// ---------------------------------------------------------
StellarWalletsKit.on(KitEventType.STATE_UPDATED, (event) => {
  console.log("STATE UPDATED:", event);
});

StellarWalletsKit.on(KitEventType.DISCONNECT, () => {
  console.log("Wallet disconnected");
});
