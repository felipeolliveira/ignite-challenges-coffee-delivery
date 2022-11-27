import styled from 'styled-components'

export const ProductCardContainer = styled.article`
  min-height: 19.375rem;
  border-radius: 0.375rem 2.25rem;
  padding: 1.25rem 1.5rem;
  background: ${({ theme }) => theme['base-card']};

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: calc(0px - 1.25rem - 1.25rem);
    margin-bottom: 0.75rem;
  }

  h3 {
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 1.25rem;
    color: ${({ theme }) => theme['base-subtitle']};

    margin-bottom: 0.5rem;
  }

  p {
    flex: 1;

    font-size: 0.875rem;
    color: ${({ theme }) => theme['base-label']};
    text-align: center;
  }

  footer {
    width: 100%;

    display: flex;
    align-items: center;
  }

  .tag-group {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    flex-wrap: wrap;
  }
`

export const ProductTag = styled.span`
  padding: 0.25rem 0.5rem;
  border-radius: 999px;
  background: ${({ theme }) => theme['yellow-300']};

  font-size: 0.625rem;
  text-transform: uppercase;
  font-weight: 700;
  color: ${({ theme }) => theme['yellow-700']};

  margin-bottom: 1rem;
`

export const ProductPrice = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.2rem;
  color: ${({ theme }) => theme['base-text']};

  span {
    font-size: 0.875rem;
  }

  strong {
    font-family: 'Baloo 2';
    font-size: 1.5rem;
  }
`

export const ProductCount = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  background: ${({ theme }) => theme['base-button']};
  padding: 0.5rem;
  border-radius: 6px;

  margin-left: auto;
  margin-right: 0.5rem;

  span {
  }

  button {
    line-height: 0;
    color: ${({ theme }) => theme['purple-500']};
    transition: color 0.2s;

    &:hover {
      color: ${({ theme }) => theme['purple-700']};
    }
  }
`

export const ProductAddToCartButton = styled.button`
  width: 2.375rem;
  height: 2.375rem;
  border-radius: 6px;
  background: ${({ theme }) => theme['purple-700']};

  display: flex;
  justify-content: center;
  align-items: center;

  line-height: 0;
  color: ${({ theme }) => theme['base-card']};

  transition: background-color 0.2s;

  &:hover {
    background: ${({ theme }) => theme['purple-500']};
  }
`
