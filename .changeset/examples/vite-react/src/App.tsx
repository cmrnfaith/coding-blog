import { useAccount } from 'wagmi'
import axios from 'axios'
import { useEffect } from 'react'

import { Account, Connect, NetworkSwitcher } from './components'

export function App() {
  const { isConnected, address } = useAccount()

  useEffect(() => {
    let params = { eth_address: address }

    axios
      .get('https://jadu-web-api.herokuapp.com/api/coinbase', { params })
      .then((response) => {
        console.log(response)
      })
  }, [address])

  return (
    <>
      <Connect />

      {isConnected && (
        <>
          <Account />
          <NetworkSwitcher />
        </>
      )}
    </>
  )
}
