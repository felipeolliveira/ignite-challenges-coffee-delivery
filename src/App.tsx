import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { LayoutProvider } from './providers/LayoutProvider'
import { OrderProvider } from './providers/OrderProvider'

import { Router } from './routes/Router'
import { GlobalStyles } from './styles/global'
import { ResetStyles } from './styles/reset'
import { defaultTheme } from './styles/themes/defaultTheme'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <ResetStyles />
        <GlobalStyles />

        <OrderProvider>
          <LayoutProvider>
            <Router />
          </LayoutProvider>
        </OrderProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
