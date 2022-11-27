import styled from 'styled-components'

export const OrderPreviewProductContainer = styled.li`
  width: 100%;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme['base-button']};

  & + li {
    padding-top: 1.5rem;
  }

  .order-item {
    display: flex;

    img {
      width: 4rem;
      height: 4rem;
      object-fit: contain;
    }
  }

  .order-info {
    margin-left: 1.25rem;
  }

  .order-action {
    display: flex;
    align-items: stretch;

    margin-top: 0.5rem;
  }

  & > strong {
    font-weight: 700;
    line-height: 1.3;

    color: ${({ theme }) => theme['base-text']};
  }
`

export const OrderPreviewProductCount = styled.div`
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

export const OrderPreviewProductRemoveButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  border-radius: 6px;
  padding: 0.4063rem 0.5rem;
  background-color: ${({ theme }) => theme['base-button']};

  transition: background-color 0.2s;

  font-size: 0.75rem;
  color: ${({ theme }) => theme['base-text']};
  line-height: 1.6;

  &:hover {
    background-color: ${({ theme }) => theme['base-hover']};
  }

  svg {
    color: ${({ theme }) => theme['purple-500']};
  }
`
