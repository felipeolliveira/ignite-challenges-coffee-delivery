import { HTMLAttributes, ReactNode } from 'react'
import styled from 'styled-components'

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function MaxWidthContainer({ children, ...props }: ContainerProps) {
  return <DefaultContainer {...props}>{children}</DefaultContainer>
}

const DefaultContainer = styled.div`
  max-width: 75rem;
  margin: 0 auto;
`
