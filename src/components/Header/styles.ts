import styled, { css } from 'styled-components'
import { MaxWidthContainer } from '../MaxWidthContainer'

export const HeaderContainer = styled(MaxWidthContainer)`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2rem;

  nav {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  & > a {
    line-height: 0;
  }
`

export const CityPoint = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.25rem;

  padding: 0.5rem;
  background: ${({ theme }) => theme['purple-300']};
  border-radius: 0.375rem;

  svg {
    color: ${({ theme }) => theme['purple-500']};
  }

  span {
    color: ${({ theme }) => theme['purple-700']};
  }
`

interface CartButtonProps {
  itensAmout?: number
}

export const CartNav = styled.div<CartButtonProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  padding: 0.5rem;
  background: ${({ theme }) => theme['yellow-300']};
  border-radius: 0.375rem;

  svg {
    color: ${({ theme }) => theme['yellow-700']};
  }

  &::after {
    content: '${({ itensAmout }) => itensAmout}';
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 99px;
    background-color: ${({ theme }) => theme['yellow-700']};

    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: -0.625rem;
    top: -0.625rem;

    font-size: 0.75rem;
    font-weight: 700;
    line-height: 0;
    color: ${({ theme }) => theme.white};

    transition: transform 0.3s, opacity 0.3s;
    transform-origin: center;
    ${({ itensAmout }) =>
      itensAmout
        ? css`
            transform: scale(1);
            opacity: 1;
          `
        : css`
            transform: scale(0);
            opacity: 0;
          `}
  }
`
