import styled from 'styled-components'

export const DefaultLayoutContainer = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;

  & > section {
    flex: 1;
    overflow: auto;
  }
`
