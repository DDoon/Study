import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './app/store'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './globalStyle'
import { theme } from './styles'
import { Route, BrowserRouter } from 'react-router-dom'
import Routes from './Routes'

const container = document.getElementById('root')

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
