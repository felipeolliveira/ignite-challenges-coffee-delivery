import { HTMLAttributes, ReactNode } from 'react'
import { CheckoutCardContainer } from './styles'

interface CheckoutCardProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode
  isPreview?: boolean
}

export function CheckoutCard({
  children,
  isPreview,
  ...props
}: CheckoutCardProps) {
  return (
    <CheckoutCardContainer isPreview={isPreview} {...props}>
      {children}
    </CheckoutCardContainer>
  )
}
