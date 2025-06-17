import Portfolio from "./components/Portfolio"
import { ThemeProvider } from "./components/theme-provider"

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
      <Portfolio />
    </ThemeProvider>
  )
}

export default App
