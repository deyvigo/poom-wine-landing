import { Routes, Route } from "react-router"
import { Navbar } from "./components/Navbar"
import { Mision } from "./pages/mision/Mision"
import { Vision } from "./pages/vision/Vision"
import { Prices } from "./pages/prices/Prices"

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Navbar /> } >
        <Route path="" element={ <Mision />} />
        <Route path="vision" element={ <Vision />} />
        <Route path="precios" element={ <Prices /> } />
      </Route>
    </Routes>
  )
}

export default App
