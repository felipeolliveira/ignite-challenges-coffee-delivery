import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowLeft, Coffee } from 'phosphor-react'
import { FormProvider, useForm } from 'react-hook-form'
import { NavLink, useNavigate } from 'react-router-dom'

import {
  Address,
  PaymentMethods,
  useOrderContext
} from '@/providers/OrderProvider'
import { CheckoutAddress, CheckoutPayment, OrderPreview } from './components'
import {
  CheckoutContainer,
  CheckoutContainerGrid,
  CheckoutEmpty
} from './styles'
import { checkoutFormValidations } from './validations/checkoutFormValidations'

export interface CheckoutFormData {
  address: Address
  payment: PaymentMethods
}

export function Checkout() {
  const navigate = useNavigate()
  const { itemsState, addAddressToOrder, addPaymentToOrder, address, payment } =
    useOrderContext()

  const checkoutForm = useForm<CheckoutFormData>({
    defaultValues: {
      address: {
        city: address?.city,
        state: address?.state
      },
      payment
    },
    resolver: zodResolver(checkoutFormValidations)
  })

  const { handleSubmit } = checkoutForm

  function onCheckoutSubmit(data: CheckoutFormData) {
    addAddressToOrder(data.address)
    addPaymentToOrder(data.payment)
    navigate('/order/success')
  }

  return (
    <CheckoutContainer>
      <FormProvider {...checkoutForm}>
        <form onSubmit={handleSubmit(onCheckoutSubmit)}>
          {!itemsState.length && (
            <CheckoutEmpty>
              <Coffee size={64} />
              <strong>Não há cafés deliciosos no carrinho</strong>
              <NavLink to="/">
                <button type="button">
                  <ArrowLeft />
                  Retornar à loja
                </button>
              </NavLink>
            </CheckoutEmpty>
          )}

          {!!itemsState.length && (
            <CheckoutContainerGrid>
              <div>
                <CheckoutAddress />

                <CheckoutPayment />
              </div>

              <OrderPreview />
            </CheckoutContainerGrid>
          )}
        </form>
      </FormProvider>
    </CheckoutContainer>
  )
}
