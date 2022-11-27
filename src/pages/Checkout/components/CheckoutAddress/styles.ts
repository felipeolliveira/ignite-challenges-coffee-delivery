import styled, { css } from 'styled-components'

export const CheckoutAddressContainer = styled.div`
  margin-bottom: 0.75rem;
`

export const CheckoutAddressInputGroup = styled.div`
  display: grid;
  grid-template-columns: 1.6fr 1.4fr 3.75rem;

  row-gap: 1rem;
  column-gap: 0.75rem;

  margin-top: 2rem;
`

interface CheckoutAddressFieldProps {
  error?: string
  optional?: boolean
}

export const CheckoutAddressField = styled.fieldset<CheckoutAddressFieldProps>`
  position: relative;

  &:nth-child(1) {
    grid-column: 1 / 2;
  }
  &:nth-child(2) {
    grid-column: 1 / 4;
  }
  &:nth-child(3) {
    grid-column: 1 / 2;
  }
  &:nth-child(4) {
    grid-column: 2 / 4;
  }
  &:nth-child(5) {
    grid-column: 1 / 2;
  }
  &:nth-child(6) {
    grid-column: 2 / 3;
  }
  &:nth-child(7) {
    grid-column: 3 / 4;
  }

  input,
  select {
    width: 100%;
    padding: 0.75rem;
    box-shadow: 0 0 0 1px ${({ theme }) => theme['base-button']};
    border-radius: 4px;

    font-size: 0.875rem;
    color: ${({ theme }) => theme['base-text']};
    background-color: ${({ theme }) => theme['base-input']};

    &::placeholder {
      color: ${({ theme }) => theme['base-label']};
    }
  }

  select {
    cursor: pointer;
  }

  ${({ optional }) =>
    optional &&
    css`
      &::before {
        content: 'Opcional';
        position: absolute;
        height: 100%;
        top: 0;
        right: 0;
        padding: 1rem;

        font-size: 0.75rem;
        font-style: italic;
        color: ${({ theme }) => theme['base-label']};
      }

      input,
      select {
        padding-right: 4.5rem;
      }
    `}

  ${({ error, theme }) =>
    error &&
    css`
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      &::after {
        content: '${error}';
        margin-left: 0.5rem;
        font-size: 0.75rem;
        color: ${theme['red-500']};
      }

      input,
      select {
        box-shadow: 0 0 0 1px ${({ theme }) => theme['red-500']} !important;
      }
    `}
`
