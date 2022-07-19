import { useAccount } from 'wagmi'
import axios from 'axios'
import { useEffect } from 'react'

import { Account, Connect, NetworkSwitcher } from './components'

export function App() {
  const { isConnected, address } = useAccount()

  useEffect(() => {
    console.log('test')
    window.location.replace('unitydl://mylink')

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
