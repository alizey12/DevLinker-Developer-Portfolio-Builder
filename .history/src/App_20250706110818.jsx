import {ThemeProvider} from "./Context/ThemeContext";
import AppRoutes from "./Routes/AppRoutes";

function App() {
  return (
    <>
    <ThemeProvider>
<AppRoutes />
    </ThemeProvider>
    </>
  )
}

export default App
