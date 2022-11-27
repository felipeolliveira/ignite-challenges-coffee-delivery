import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :focus-visible {
    outline: none;
    box-shadow: 0 0 0 1px ${({ theme }) => theme['yellow-500']} !important;
  }

  body{
    background: ${({ theme }) => theme.background};
  }
  
  body, input, textarea, input, button {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.3;
  }

  a, button {
    cursor: pointer;
  }

  /* ===== Scrollbar CSS ===== */
  /* Firefox */
  * {
    scrollbar-width: auto;
    scrollbar-color: #8d8686 #ffffff;
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 8px;
  }

  *::-webkit-scrollbar-track {
    background: #ffffff;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #8d8686;
    border-radius: 20px;
    border: 0px solid #d11515;
  }
  /* ===== End:: Scrollbar CSS ===== */

  @media (max-width: 768px) {
    html {
      font-size: 87.5%;
    }
  }
  
`
