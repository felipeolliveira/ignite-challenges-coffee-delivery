import styled from 'styled-components'

export const OrderPreviewContainer = styled.div``

export const OrderPreviewItems = styled.ul``

export const OrderPreviewFooter = styled.footer`
  ul {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    flex-wrap: wrap;

    padding: 1.5rem 0;

    li {
      width: 100%;

      display: flex;
      justify-content: space-between;
      align-items: center;

      color: ${({ theme }) => theme['base-text']};

      &:last-child {
        font-size: 1.25rem;
        font-weight: 700;
        color: ${({ theme }) => theme['base-text']};
      }
    }
  }

  button {
    width: 100%;
    padding: 0.75rem;
    background-color: ${({ theme }) => theme['yellow-500']};
    border-radius: 6px;

    text-align: center;
    font-size: 0.875rem;
    text-transform: uppercase;
    font-weight: 700;
    line-height: 1.6;
    color: ${({ theme }) => theme.white};

    transition: background-color 0.2s;

    &:hover {
      background-color: ${({ theme }) => theme['yellow-700']};
    }
  }
`
