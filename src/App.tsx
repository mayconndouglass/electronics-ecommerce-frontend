import { ThemeProvider } from 'styled-components'
import { Home } from './pages/Home'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export const App = () => {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Home />
      </ThemeProvider>
    </>
  )
}
