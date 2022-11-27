import { useOrderContext } from '@/providers/OrderProvider'
import { currencyFormat, roundNumber } from '@/utils'
import { CheckoutCard } from '../CheckoutCard'
import { OrderPreviewProduct } from '../OrderPreviewProduct'
import {
  OrderPreviewContainer,
  OrderPreviewFooter,
  OrderPreviewItems
} from './styles'

export function OrderPreview() {
  const { itemsState, settings } = useOrderContext()

  const totalPriceOfAllItems = itemsState.reduce((acc, curr) => {
    return roundNumber(acc + curr.totalPrice)
  }, 0)

  const totalPriceWithDeliveryFee = roundNumber(
    totalPriceOfAllItems + settings.deliveryFee
  )

  return (
    <OrderPreviewContainer>
      <h3>Café selecionados</h3>

      <CheckoutCard isPreview>
        <OrderPreviewItems>
          {itemsState.map((item) => (
            <OrderPreviewProduct key={item.itemId} item={item} />
          ))}
        </OrderPreviewItems>

        <OrderPreviewFooter>
          <ul>
            <li>
              <span>Total de itens</span>
              <span>{currencyFormat(totalPriceOfAllItems)}</span>
            </li>
            <li>
              <span>Entrega</span>
              <span>{currencyFormat(settings.deliveryFee)}</span>
            </li>
            <li>
              <span>Total</span>
              <span>{currencyFormat(totalPriceWithDeliveryFee)}</span>
            </li>
          </ul>
          <button type="submit">Confirmar pedido</button>
        </OrderPreviewFooter>
      </CheckoutCard>
    </OrderPreviewContainer>
  )
}
