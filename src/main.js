import { AppKit } from '@reown/appkit'
import { getUniversalConnector } from './config/appKit.js'

async function setup() {
  const universalConnector = await getUniversalConnector()
  const appKit = new AppKit({ universalConnector })

  const connectBtn = document.getElementById('open-connect-modal')
  connectBtn.addEventListener('click', async () => {
    try {
      const session = await appKit.connect({
        requiredNamespaces: {
          stellar: {
            chains: ['stellar:pubnet'],
            methods: ['stellar_signXDR', 'stellar_signAndSubmitXDR'],
            events: ['chainChanged', 'accountsChanged']
          }
        }
      })
      const account = session.namespaces.stellar.accounts[0]
      alert('Connected!\nPublic Key: ' + account)
      console.log('Session object:', session)
    } catch (err) {
      console.error('Connection failed:', err)
      alert('Connection cancelled or failed.')
    }
  })
}

setup()
