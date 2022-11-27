import { MapPinLine } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import { CheckoutFormData } from '../..'
import { CheckoutCard } from '../CheckoutCard'
import {
  CheckoutAddressContainer,
  CheckoutAddressField,
  CheckoutAddressInputGroup
} from './styles'

const UFs = [
  { name: 'Acre', initial: 'AC' },
  { name: 'Alagoas', initial: 'AL' },
  { name: 'Amapá', initial: 'AP' },
  { name: 'Amazonas', initial: 'AM' },
  { name: 'Bahia', initial: 'BA' },
  { name: 'Ceará', initial: 'CE' },
  { name: 'Distrito Federal', initial: 'DF' },
  { name: 'Espírito Santo', initial: 'ES' },
  { name: 'Goiás', initial: 'GO' },
  { name: 'Maranhão', initial: 'MA' },
  { name: 'Mato Grosso', initial: 'MT' },
  { name: 'Mato Grosso do Sul', initial: 'MS' },
  { name: 'Minas Gerais', initial: 'MG' },
  { name: 'Pará', initial: 'PA' },
  { name: 'Paraíba', initial: 'PB' },
  { name: 'Paraná', initial: 'PR' },
  { name: 'Pernambuco', initial: 'PE' },
  { name: 'Piauí', initial: 'PI' },
  { name: 'Rio de Janeiro', initial: 'RJ' },
  { name: 'Rio Grande do Norte', initial: 'RN' },
  { name: 'Rio Grande do Sul', initial: 'RS' },
  { name: 'Rondônia', initial: 'RO' },
  { name: 'Roraima', initial: 'RR' },
  { name: 'Santa Catarina', initial: 'SC' },
  { name: 'São Paulo', initial: 'SP' },
  { name: 'Sergipe', initial: 'SE' },
  { name: 'Tocantins', initial: 'TO' }
]

export function CheckoutAddress() {
  const { register, formState } = useFormContext<CheckoutFormData>()

  const errors = formState.errors.address

  return (
    <CheckoutAddressContainer>
      <h3>Complete seu pedido</h3>

      <CheckoutCard>
        <header>
          <MapPinLine size={22} className="address-icon" />
          <div className="content">
            <strong>Endereço de Entrega</strong>
            <span>Informe o endereço onde deseja receber seu pedido</span>
          </div>
        </header>
        <CheckoutAddressInputGroup>
          <CheckoutAddressField error={errors?.postalCode?.message}>
            <input
              type="text"
              placeholder="CEP"
              {...register('address.postalCode')}
            />
          </CheckoutAddressField>
          <CheckoutAddressField error={errors?.street?.message}>
            <input
              type="text"
              placeholder="Rua"
              {...register('address.street')}
            />
          </CheckoutAddressField>
          <CheckoutAddressField error={errors?.houseNumber?.message}>
            <input
              type="text"
              placeholder="Número"
              {...register('address.houseNumber')}
            />
          </CheckoutAddressField>
          <CheckoutAddressField error={errors?.complement?.message} optional>
            <input
              type="text"
              placeholder="Complemento"
              {...register('address.complement')}
            />
          </CheckoutAddressField>
          <CheckoutAddressField error={errors?.region?.message}>
            <input
              type="text"
              placeholder="Bairro"
              {...register('address.region')}
            />
          </CheckoutAddressField>
          <CheckoutAddressField error={errors?.city?.message}>
            <input
              type="text"
              placeholder="Cidade"
              {...register('address.city')}
            />
          </CheckoutAddressField>
          <CheckoutAddressField error={errors?.state?.message}>
            <select
              placeholder="UF"
              defaultValue="SP"
              {...register('address.state')}
            >
              {UFs.map((uf) => (
                <option value={uf.initial} key={uf.initial}>
                  {uf.initial}
                </option>
              ))}
            </select>
          </CheckoutAddressField>
        </CheckoutAddressInputGroup>
      </CheckoutCard>
    </CheckoutAddressContainer>
  )
}
