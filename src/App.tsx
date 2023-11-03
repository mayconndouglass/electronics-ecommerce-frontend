import { ThemeProvider } from 'styled-components'
import { QueryClientProvider } from 'react-query'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { queryClient } from './services/queryClient'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes'

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Router />
          <GlobalStyle />
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  )
}
