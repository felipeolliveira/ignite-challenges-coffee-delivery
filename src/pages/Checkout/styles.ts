import { MaxWidthContainer } from '@/components/MaxWidthContainer'
import styled from 'styled-components'

export const CheckoutContainer = styled(MaxWidthContainer)`
  height: 100%;
  min-height: 500px;

  padding: 2.5rem 2rem;

  form {
    height: 100%;
  }
`

export const CheckoutEmpty = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 2rem;

  svg {
    color: ${({ theme }) => theme['base-label']};
  }

  strong {
    font-family: 'Baloo 2';
    font-size: 2rem;
    color: ${({ theme }) => theme['base-label']};
  }

  button {
    display: flex;
    gap: 0.5rem;
    align-items: center;

    padding: 1rem;
    border-radius: 6px;
    background-color: ${({ theme }) => theme['yellow-300']};
    margin-top: 2rem;

    color: ${({ theme }) => theme['yellow-700']};
    font-size: 0.875rem;
    line-height: 1.4;

    svg {
      color: inherit;
    }
  }
`

export const CheckoutContainerGrid = styled.main`
  display: grid;
  grid-template-columns: 1fr 27.5rem;
  column-gap: 2rem;

  align-items: flex-start;

  h3 {
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.3;
    color: ${({ theme }) => theme['base-subtitle']};

    margin-bottom: 0.9375rem;
  }
`
