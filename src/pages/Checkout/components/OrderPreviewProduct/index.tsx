import { useOrderContext } from '@/providers/OrderProvider'
import { CartItem } from '@/reducers/cartItems/reducer'
import { currencyFormat } from '@/utils'
import { Minus, Plus, Trash } from 'phosphor-react'
import {
  OrderPreviewProductContainer,
  OrderPreviewProductCount,
  OrderPreviewProductRemoveButton
} from './styles'

interface OrderPreviewProductProps {
  item: CartItem
}

export function OrderPreviewProduct({ item }: OrderPreviewProductProps) {
  const { updateItemAmountInCart, removeItemFromCart, settings } =
    useOrderContext()

  const isMaxCofeeAmount = item.amount < settings.maxCoffeeAmount
  const isMinCofeeAmount = item.amount > settings.minCoffeeAmount

  function handleIncreaseItemAmount() {
    if (isMaxCofeeAmount) {
      console.log('increase', item)
      updateItemAmountInCart(item.itemId, 'increase')
    } else {
      alert(
        `Infelizmente, não podemos fazer um pedido acima de 10 unidades por café. Estamos trabalhando para melhorar nossas entregas! :)`
      )
    }
  }

  function handleDecreaseItemAmount() {
    if (isMinCofeeAmount) {
      console.log('increase', item)
      updateItemAmountInCart(item.itemId, 'decrease')
    } else {
      alert(`Quantidade mínima é um 1 café`)
    }
  }

  function handleRemoveItemFromCart() {
    removeItemFromCart(item.itemId)
  }

  return (
    <OrderPreviewProductContainer>
      <div className="order-item">
        <img src={item.product.imageUrl} alt="" />
        <div className="order-info">
          <span>{item.product.name}</span>

          <div className="order-action">
            <OrderPreviewProductCount>
              <button
                type="button"
                onClick={handleDecreaseItemAmount}
                disabled={!isMinCofeeAmount}
              >
                <Minus size={16} />
              </button>
              <span>{item.amount}</span>
              <button
                type="button"
                onClick={handleIncreaseItemAmount}
                disabled={!isMaxCofeeAmount}
              >
                <Plus size={16} />
              </button>
            </OrderPreviewProductCount>
            <OrderPreviewProductRemoveButton
              type="button"
              onClick={handleRemoveItemFromCart}
            >
              <Trash />
              Remover
            </OrderPreviewProductRemoveButton>
          </div>
        </div>
      </div>

      <strong>{currencyFormat(item.totalPrice)}</strong>
    </OrderPreviewProductContainer>
  )
}
