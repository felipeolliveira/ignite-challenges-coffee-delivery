import { MaxWidthContainer } from '@/components/MaxWidthContainer'
import styled, { css } from 'styled-components'

export const SuccessOrderContainer = styled(MaxWidthContainer)`
  height: 100%;
  padding: 5rem 2rem;
`

export const SuccessOrderEmpty = styled.div`
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
    max-width: 31.25rem;

    font-family: 'Baloo 2';
    font-size: 2rem;
    color: ${({ theme }) => theme['base-label']};
    text-align: center;
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

export const SuccessOrderCompleted = styled.div`
  header {
    h1 {
      font-family: 'Baloo 2';
      font-weight: 800;
      font-size: 2rem;
      color: ${({ theme }) => theme['yellow-700']};
    }

    p {
      font-size: 1.25rem;
      color: ${({ theme }) => theme['base-subtitle']};
    }
  }

  main {
    display: flex;
    align-items: center;

    margin-top: 2.5rem;
  }

  & > a {
    margin-top: 2rem;

    max-width: fit-content;
    display: flex;
    align-items: center;
    gap: 1rem;

    padding: 1rem;
    border-radius: 6px;
    background-color: ${({ theme }) => theme['yellow-300']};

    color: ${({ theme }) => theme['yellow-700']};
  }
`

export const SuccessOrderDelivery = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  min-width: 32.5rem;
  padding: 2.5rem;
  border-radius: 6px 44px;
  border: 1px solid transparent;
  background: ${({ theme }) => theme.background};
  background-clip: padding-box;

  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    margin: -1px;
    border-radius: inherit;

    ${({ theme }) => css`
      background: linear-gradient(
        135deg,
        ${theme['yellow-500']},
        ${theme['purple-500']}
      );
    `}
  }

  li {
    display: flex;
    align-items: center;

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 2rem;
      height: 2rem;
      border-radius: 99px;

      color: ${({ theme }) => theme.background};

      &.purple {
        background-color: ${({ theme }) => theme['purple-500']};
      }
      &.yellow {
        background-color: ${({ theme }) => theme['yellow-500']};
      }
      &.yellowDark {
        background-color: ${({ theme }) => theme['yellow-700']};
      }
    }

    .info {
      margin-left: 0.75rem;
      display: flex;
      flex-direction: column;

      color: ${({ theme }) => theme['base-text']};

      strong {
        font-weight: 700;
      }
    }
  }
`

export const SuccessOrderIllustration = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 18.125rem;
    object-fit: contain;
  }
`
