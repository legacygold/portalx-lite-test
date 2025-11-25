import { StellarWalletsKit } from "@creit-tech/stellar-wallets-kit/sdk";

async function init() {
  const kit = new StellarWalletsKit({
    network: WalletNetwork.PUBLIC,
    modules: [
      new LobstrModule(),
      new WalletConnectModule({
        name: "PortalX LITE",
        description: "PortalX LITE connects to your Lobstr wallet",
        url: window.location.origin,
        icons: ["https://legacygold.github.io/portalx-lite-test/icon.png"], // change if needed
        projectId: "48b7bf0dacf7920c182f112b3cc388a8"
      })
    ]
  });

  kit.createButton({
    container: document.getElementById("wallet-connect-btn"),
    onConnect: async ({ address }) => {
      console.log("Connected address:", address);
      // TODO: pass this address into your Apps Script / Sheets container
    },
    onDisconnect: () => {
      console.log("Disconnected");
    },
    horizonUrl: "https://horizon.stellar.org"
  });

  // example function to sign transaction XDR
  window.signXdr = async function (xdr) {
    const { address } = await kit.getWallet();
    const { signedXDR } = await kit.signTransaction(xdr, {
      address,
      networkPassphrase: WalletNetwork.PUBLIC
    });
    return signedXDR;
  };
}

init();
