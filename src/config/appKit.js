import { UniversalConnector } from '@reown/appkit-universal-connector'

// 1️⃣  Your Reown project ID
export const projectId =
  import.meta.env.VITE_PROJECT_ID || '48b7bf0dacf7920c182f112b3cc388a8'

// 2️⃣  Define the Stellar “network object”
const stellarPubnet = {
  id: 1,
  chainNamespace: 'stellar',
  caipNetworkId: 'stellar:pubnet',
  name: 'Stellar',
  nativeCurrency: { name: 'Lumens', symbol: 'XLM', decimals: 7 },
  rpcUrls: { default: { http: ['https://horizon.stellar.org'] } }
}

// 3️⃣  Keep a single connector instance
let universalConnector

export async function getUniversalConnector() {
    if (!universalConnector) {
      universalConnector = await UniversalConnector.init({
        projectId,
        metadata: {
          name: 'PortalX LITE',
          description: 'Lightweight Stellar connector',
          url: 'https://legacygold.github.io/portalx-lite-test',
          icons: ['https://legacygold.github.io/portalx-lite-test/icon.png']
        },
        wallets: [
          {
            id: '76a3d548a08cf402f5c7d021f24fd2881d767084b387a5325df88bc3d4b6f21b',
            name: 'Lobstr'
          }
        ],
        networks: [
          {
            namespace: 'stellar',
            chains: ['stellar:pubnet'],
            methods: ['stellar_signXDR', 'stellar_signAndSubmitXDR'],
            events: ['accountsChanged']
          }
        ]
      })
    }
    return universalConnector
  }
  
