import { PaymentMethods } from '@/providers/OrderProvider'
import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import { CheckoutFormData } from '../..'
import { CheckoutCard } from '../CheckoutCard'
import {
  CheckoutPaymentButton,
  CheckoutPaymentButtonGroup,
  CheckoutPaymentContainer
} from './styles'

export function CheckoutPayment() {
  const { watch, setValue } = useFormContext<CheckoutFormData>()

  const payment = watch('payment')
  function handleClickInMethod(method: PaymentMethods) {
    return () => {
      setValue('payment', method)
    }
  }

  return (
    <CheckoutPaymentContainer>
      <CheckoutCard>
        <header>
          <CurrencyDollar size={22} className="payment-icon" />
          <div className="content">
            <strong>Pagamento</strong>
            <span>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </span>
          </div>
        </header>

        <CheckoutPaymentButtonGroup>
          <CheckoutPaymentButton
            type="button"
            onClick={handleClickInMethod('credit')}
            selected={payment === 'credit'}
          >
            <CreditCard />
            Cartão de crédito
          </CheckoutPaymentButton>
          <CheckoutPaymentButton
            type="button"
            onClick={handleClickInMethod('debit')}
            selected={payment === 'debit'}
          >
            <Bank />
            Cartão de débito
          </CheckoutPaymentButton>
          <CheckoutPaymentButton
            type="button"
            onClick={handleClickInMethod('cash')}
            selected={payment === 'cash'}
          >
            <Money />
            Dinheiro
          </CheckoutPaymentButton>
        </CheckoutPaymentButtonGroup>
      </CheckoutCard>
    </CheckoutPaymentContainer>
  )
}
