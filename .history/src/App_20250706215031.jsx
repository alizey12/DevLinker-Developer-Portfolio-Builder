import React from 'react'
import AppRoutes from './Routes/AppRoutes'

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
