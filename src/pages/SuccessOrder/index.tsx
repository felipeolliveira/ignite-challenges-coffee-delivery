import {
  ArrowLeft,
  Coffee,
  CurrencyDollar,
  MapPin,
  Timer
} from 'phosphor-react'
import { useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

import { useLayoutContext } from '@/providers/LayoutProvider'
import { useOrderContext } from '@/providers/OrderProvider'
import {
  SuccessOrderCompleted,
  SuccessOrderContainer,
  SuccessOrderDelivery,
  SuccessOrderEmpty,
  SuccessOrderIllustration
} from './styles'

export default function SuccessOrder() {
  const { hideCart } = useLayoutContext()
  const { address, payment, clearCart, itemsState } = useOrderContext()

  const paymentNames = {
    credit: 'Cartão de Crédito',
    debit: 'Cartão de Débito',
    cash: 'Dinheiro'
  } as const

  useEffect(() => {
    hideCart(true)
    return () => {
      hideCart(false)
    }
  }, [])

  function handleReturnToStore() {
    clearCart()
  }

  return (
    <SuccessOrderContainer>
      {!itemsState.length && (
        <SuccessOrderEmpty>
          <Coffee size={64} />
          <strong>Não há pedidos de cafés deliciosos</strong>
          <NavLink to="/" replace>
            <button type="button">
              <ArrowLeft />
              Retornar à loja
            </button>
          </NavLink>
        </SuccessOrderEmpty>
      )}

      {!!itemsState.length && (
        <SuccessOrderCompleted>
          <header>
            <h1>Uhu! Pedido confirmado</h1>
            <p>Agora é só aguardar que logo o café chegará até você</p>
          </header>

          <main>
            <SuccessOrderDelivery>
              <li>
                <div className="icon purple">
                  <MapPin weight="fill" />
                </div>
                <div className="info">
                  <span>
                    Entrega em{' '}
                    <strong>
                      {address?.street}, {address?.houseNumber}
                    </strong>{' '}
                  </span>
                  <span>
                    {address?.region} - {address?.city}, {address?.state}
                  </span>
                </div>
              </li>

              <li>
                <div className="icon yellow">
                  <Timer weight="fill" />
                </div>
                <div className="info">
                  <span>Previsão de entrega</span>
                  <strong>20 min - 30 min</strong>
                </div>
              </li>

              <li>
                <div className="icon yellowDark">
                  <CurrencyDollar weight="fill" />
                </div>
                <div className="info">
                  <span>Pagamento na entrega</span>
                  <strong>{paymentNames[payment]}</strong>
                </div>
              </li>
            </SuccessOrderDelivery>

            <SuccessOrderIllustration>
              <img src="/illustrations/order_success.svg" alt="" />
            </SuccessOrderIllustration>
          </main>

          <Link to="/" onClick={handleReturnToStore}>
            <ArrowLeft />
            Voltar à loja
          </Link>
        </SuccessOrderCompleted>
      )}
    </SuccessOrderContainer>
  )
}
