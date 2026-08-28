import { Routes, Route} from "react-router"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Navbar from "./components/Navbar"
import Banner from "./components/Banner"
import Explore from "./components/Explore"

const App = () => {
  return (
    <>
    <Navbar/>
    <Banner/>
    <Explore/>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
  
    </>
  )
}

export default App
