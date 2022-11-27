import styled, { css } from 'styled-components'

export const CheckoutPaymentContainer = styled.div``

export const CheckoutPaymentButtonGroup = styled.div`
  width: 100%;
  margin-top: 2rem;

  display: flex;
  align-items: center;
  gap: 0.75rem;
`

interface CheckoutPaymentButtonProps {
  selected?: boolean
}

export const CheckoutPaymentButton = styled.button<CheckoutPaymentButtonProps>`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  border-radius: 6px;
  padding: 1rem;

  font-size: 0.75rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme['base-text']};
  line-height: 1.6;

  transition: all 0.2s;

  ${({ selected }) =>
    selected
      ? css`
          background-color: ${({ theme }) => theme['purple-300']};
          box-shadow: 0 0 0 1px ${({ theme }) => theme['purple-500']};
        `
      : css`
          background-color: ${({ theme }) => theme['base-button']};
        `}

  svg {
    color: ${({ theme }) => theme['purple-500']};
  }

  &:hover {
    background-color: ${({ theme }) => theme['base-hover']};
  }
`
