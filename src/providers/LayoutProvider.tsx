import { createContext, ReactNode, useContext, useState } from 'react'

interface LayoutContextData {
  isCartHidden: boolean
  hideCart: (visible: boolean) => void
}

const LayoutContext = createContext({} as LayoutContextData)

interface LayoutProviderProps {
  children: ReactNode
}

export function LayoutProvider({ children }: LayoutProviderProps) {
  const [isCartHidden, setIsCartHidden] = useState(false)

  function hideCart(visible: boolean) {
    setIsCartHidden(visible)
  }

  return (
    <LayoutContext.Provider
      value={{
        isCartHidden,
        hideCart
      }}
    >
      {children}
    </LayoutContext.Provider>
  )
}

export function useLayoutContext() {
  const context = useContext(LayoutContext)

  return context
}
