import * as zod from 'zod'

export const checkoutFormValidations = zod.object({
  address: zod.object({
    postalCode: zod
      .string()
      .regex(
        /^[0-9]{5}-[0-9]{3}$/,
        'Formato precisa ser válido. Exemplo: 13123-123'
      ),
    street: zod.string().min(1, 'Campo Obrigatório'),
    houseNumber: zod.string().min(1, 'Campo Obrigatório'),
    complement: zod.string().optional(),
    region: zod.string().min(1, 'Campo Obrigatório'),
    city: zod.string().min(1, 'Campo obrigatório'),
    state: zod
      .string()
      .regex(
        /^[A-Z]{2}$/,
        'Formato precisa ser válido. Exemplo: SP, RJ, MG, ...'
      )
  }),
  payment: zod.string()
})
