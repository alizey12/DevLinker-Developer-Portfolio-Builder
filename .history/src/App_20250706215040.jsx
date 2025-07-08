import React from 'react'
import AppRoutes from './Routes/AppRoutes'
import { ThemeProvider } from './Context/ThemeContext'
ThemeProvider
const App = () => {
  return (
    <>
     <ThemeProvider>
      <AppRoutes />
      </ThemeProvider>
    </>
  )
}

export default App
