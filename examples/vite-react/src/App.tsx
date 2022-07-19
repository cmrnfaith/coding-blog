import { useAccount } from 'wagmi'

import { Account, Connect, NetworkSwitcher } from './components'
import { useEffect } from 'react'

export function App() {
  const { isConnected, address } = useAccount()

 useEffect(() => {
    console.log('test')

    window.location.replace('unitydl://mylink/?address=' + address)
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
