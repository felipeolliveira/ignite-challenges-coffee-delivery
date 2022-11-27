import { ProductData } from './reducer'

export enum CartActionTypes {
  ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART',
  UPDATE_ITEM_AMOUNT_IN_CART = 'UPDATE_ITEM_AMOUNT_IN_CART',
  REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART',
  CLEAR_ITEMS_IN_CART = 'CLEAR_ITEMS_IN_CART'
}

export type ActionReturnType<T> = {
  type: CartActionTypes
  payload: T
}

type ProductWithAmountPayload = {
  product: ProductData
  amount: number
}

export function addProductToCartAction(
  productWithAmount: ProductWithAmountPayload
): ActionReturnType<ProductWithAmountPayload> {
  return {
    type: CartActionTypes.ADD_PRODUCT_TO_CART,
    payload: productWithAmount
  }
}

type UpdateProductPayload = {
  itemId: string
  amountAction: 'increase' | 'decrease'
}

export function updateItemAmountInCartAction(
  updateItem: UpdateProductPayload
): ActionReturnType<UpdateProductPayload> {
  return {
    type: CartActionTypes.UPDATE_ITEM_AMOUNT_IN_CART,
    payload: updateItem
  }
}

export function removeItemFromCartAction(
  itemId: string
): ActionReturnType<string> {
  return {
    type: CartActionTypes.REMOVE_ITEM_FROM_CART,
    payload: itemId
  }
}

export function clearItemsInCartAction(): ActionReturnType<undefined> {
  return {
    type: CartActionTypes.CLEAR_ITEMS_IN_CART,
    payload: undefined
  }
}
