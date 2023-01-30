import React from 'react'
import { TheFooter } from 'src/components/TheFooter/TheFooter'
import { TheHeader } from 'src/components/TheHeader/TheHeader'
import Routes from 'src/Routes'
import { GlobalStyle } from './globalStyle'

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />

      <TheHeader />
      <TheFooter />
    </React.Fragment>
  )
}

export default App
