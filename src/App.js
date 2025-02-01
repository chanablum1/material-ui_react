import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import ResponsiveAppBar from "./components/ResponsiveAppBar"
import Tour from "./pages/Tour"

function App() {
  return (
    <BrowserRouter>
      <ResponsiveAppBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Tour />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
