import { Routes, Route } from "react-router"
import { Navbar } from "./components/Navbar"
import { Mision } from "./pages/mision/Mision"
import { Vision } from "./pages/vision/Vision"
import { Prices } from "./pages/prices/Prices"
import { Position } from "./pages/map/Position"

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Navbar /> } >
        <Route path="" element={ <Mision />} />
        <Route path="vision" element={ <Vision />} />
        <Route path="precios" element={ <Prices /> } />
        <Route path="map" element={ <Position /> } />
      </Route>
    </Routes>
  )
}

export default App
