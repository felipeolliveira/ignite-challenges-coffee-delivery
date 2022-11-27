import {
  addProductToCartAction,
  clearItemsInCartAction,
  removeItemFromCartAction,
  updateItemAmountInCartAction
} from '@/reducers/cartItems/action'
import {
  CartItem,
  cartReducer,
  ProductData
} from '@/reducers/cartItems/reducer'
import {
  createContext,
  ReactNode,
  useContext,
  useReducer,
  useState
} from 'react'

export type PaymentMethods = 'credit' | 'debit' | 'cash'

export interface Address {
  postalCode: string
  street: string
  houseNumber: string
  complement?: string
  region: string
  city: string
  state: string
}

interface CartContextData {
  itemsState: CartItem[]
  address: Address | null
  payment: PaymentMethods

  settings: {
    maxCoffeeAmount: number
    minCoffeeAmount: number
    deliveryFee: number
  }

  addProductToCart: (product: ProductData, amount: number) => void
  updateItemAmountInCart: (
    itemId: string,
    amountAction: 'increase' | 'decrease'
  ) => void
  removeItemFromCart: (itemId: string) => void
  addAddressToOrder: (address: Address) => void
  addPaymentToOrder: (paymentMethod: PaymentMethods) => void
  clearCart: () => void
}

const CartContext = createContext({} as CartContextData)

interface CartProviderProps {
  children: ReactNode
}

export function OrderProvider({ children }: CartProviderProps) {
  const [itemsState, itemsDispatch] = useReducer(cartReducer, [])
  const [address, setAddress] = useState<Address | null>(null)
  const [payment, setPayment] = useState<PaymentMethods>('credit')
  const settings = {
    maxCoffeeAmount: 10,
    minCoffeeAmount: 1,
    deliveryFee: 3.5
  }

  function addProductToCart(product: ProductData, amount: number) {
    itemsDispatch(
      addProductToCartAction({
        product,
        amount
      })
    )
  }

  function updateItemAmountInCart(
    itemId: string,
    amountAction: 'increase' | 'decrease'
  ) {
    itemsDispatch(
      updateItemAmountInCartAction({
        itemId,
        amountAction
      })
    )
  }

  function clearCart() {
    itemsDispatch(clearItemsInCartAction())
  }

  function removeItemFromCart(itemId: string) {
    itemsDispatch(removeItemFromCartAction(itemId))
  }

  function addAddressToOrder(address: Address) {
    setAddress(address)
  }

  function addPaymentToOrder(paymentMethod: PaymentMethods) {
    setPayment(paymentMethod)
  }

  return (
    <CartContext.Provider
      value={{
        itemsState,
        address,
        payment,
        settings,
        addProductToCart,
        removeItemFromCart,
        updateItemAmountInCart,
        clearCart,
        addAddressToOrder,
        addPaymentToOrder
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useOrderContext() {
  const context = useContext(CartContext)

  return context
}
