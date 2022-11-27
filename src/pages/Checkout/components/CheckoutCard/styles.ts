import styled, { css } from 'styled-components'

interface CheckoutCardContainerProps {
  isPreview?: boolean
}

export const CheckoutCardContainer = styled.article<CheckoutCardContainerProps>`
  padding: 2.5rem;
  background-color: ${({ theme }) => theme['base-card']};

  ${({ isPreview }) => css`
    border-radius: ${isPreview ? '6px 44px' : '6px'};
  `}

  header {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;

    svg.address-icon {
      color: ${({ theme }) => theme['yellow-700']};
    }

    svg.payment-icon {
      color: ${({ theme }) => theme['purple-500']};
    }

    .content {
      display: flex;
      flex-direction: column;

      strong {
        color: ${({ theme }) => theme['base-subtitle']};
        margin-bottom: 0.125rem;
      }

      span {
        font-size: 0.875rem;
        color: ${({ theme }) => theme['base-text']};
      }
    }
  }
`
