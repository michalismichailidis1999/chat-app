import React from 'react'
import ReactDOM from 'react-dom'
import Root from 'pages/Root'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import theme from 'theme/theme'
import reportWebVitals from 'reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Root />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
