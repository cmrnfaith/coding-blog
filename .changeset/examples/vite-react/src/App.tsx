import { useAccount } from 'wagmi'
import axios from 'axios'
import { useEffect } from 'react'

import { Account, Connect, NetworkSwitcher } from './components'

export function App() {
  const { isConnected, address } = useAccount()

  useEffect(() => {
    let params = { eth_address: address }
    window.location.replace('unitydl://mylink')
    axios.post('unitydl://mylink', { params }).then((response) => {
      console.log(response)
    })
    window.location.replace('unitydl://mylink')
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
