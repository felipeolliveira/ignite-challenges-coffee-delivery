import { roundNumber } from '@/utils'
import { produce } from 'immer'
import { ActionReturnType, CartActionTypes } from './action'

export interface ProductData {
  id: number
  imageUrl: string
  tags: string[]
  name: string
  description: string
  price: number
}

export interface CartItem {
  itemId: string
  product: ProductData
  amount: number
  totalPrice: number
}

export const cartReducer = (
  state: CartItem[],
  action: ActionReturnType<any>
) => {
  switch (action.type) {
    case CartActionTypes.ADD_PRODUCT_TO_CART: {
      const isProductAlreadyInTheCart = state.findIndex(
        (item) => item.product.id === action.payload.product.id
      )

      if (isProductAlreadyInTheCart > -1) {
        const amountAddedExceedTheTotal =
          state[isProductAlreadyInTheCart].amount + action.payload.amount > 10

        if (amountAddedExceedTheTotal) {
          alert(
            `Infelizmente, não podemos fazer um pedido acima de 10 unidades por café. Estamos trabalhando para melhorar nossas entregas! :)`
          )
          return state
        } else {
          return produce(state, (draft) => {
            const currentAmount = draft[isProductAlreadyInTheCart].amount
            const productPrice = draft[isProductAlreadyInTheCart].product.price
            const payloadAmount = action.payload.amount
            const totalAmount = currentAmount + payloadAmount

            draft[isProductAlreadyInTheCart].amount = totalAmount
            draft[isProductAlreadyInTheCart].totalPrice = roundNumber(
              totalAmount * productPrice
            )
          })
        }
      }

      return produce(state, (draft) => {
        draft.push({
          itemId: new Date().getTime().toString(),
          totalPrice: roundNumber(
            action.payload.product.price * action.payload.amount
          ),
          ...action.payload
        })
      })
    }

    case CartActionTypes.UPDATE_ITEM_AMOUNT_IN_CART: {
      const itemIndex = state.findIndex(
        (item) => item.itemId === action.payload.itemId
      )

      if (itemIndex < 0) return state

      const currentItemAmount = state[itemIndex].amount

      switch (action.payload.amountAction) {
        case 'increase': {
          return produce(state, (draft) => {
            draft[itemIndex].amount = currentItemAmount + 1
            draft[itemIndex].totalPrice = roundNumber(
              draft[itemIndex].amount * draft[itemIndex].product.price
            )
          })
        }

        case 'decrease': {
          return produce(state, (draft) => {
            draft[itemIndex].amount = currentItemAmount - 1
            draft[itemIndex].totalPrice = roundNumber(
              draft[itemIndex].amount * draft[itemIndex].product.price
            )
          })
        }

        default:
          return state
      }
    }

    case CartActionTypes.REMOVE_ITEM_FROM_CART: {
      const cartItem = state.find((item) => item.itemId === action.payload)

      if (!cartItem) return state

      return state.filter((item) => item.itemId !== cartItem.itemId)
    }

    case CartActionTypes.CLEAR_ITEMS_IN_CART: {
      return []
    }

    default:
      return state
  }
}
