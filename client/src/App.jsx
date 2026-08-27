import { Routes, Route} from "react-router"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
  
    </>
  )
}

export default App
