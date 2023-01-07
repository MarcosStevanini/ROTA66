import React from 'react'
import Router from './src/routes'
import { ThemeProvider } from 'styled-components'
import theme from './src/global/styles/theme'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  )
}
