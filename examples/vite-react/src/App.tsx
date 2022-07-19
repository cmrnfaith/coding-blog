import { useAccount } from 'wagmi'

import { useEffect } from 'react'

import { Account, Connect, NetworkSwitcher } from './components'

export function App() {
  const { isConnected, address } = useAccount()

  useEffect(() => {
    console.log(address)
    if (address !== null) {
      window.location.replace('unitydl://mylink/?address=' + address)
    }
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
