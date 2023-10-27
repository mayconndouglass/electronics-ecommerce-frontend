import { ThemeProvider } from 'styled-components'
import { QueryClientProvider } from 'react-query'
// import { Home } from './pages/Home'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
// import { ProductDetails } from './pages/ProductDetails'
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
          {/*  <Home /> */}
          {/* <ProductDetails /> */}
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  )
}
