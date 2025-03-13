import { BrowserRouter } from "react-router-dom"
import "./global.css"
import { Router } from "./Router"
import { Header } from "./components/Header"

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
    </>
  )
}

export default App
