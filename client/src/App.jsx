import { Routes, Route} from "react-router"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Navbar from "./components/Navbar"
import Banner from "./components/Banner"
import Explore from "./components/Explore"
import ChooseUs from "./components/ChooseUs"

const App = () => {
  return (
    <>
    <Navbar/>
    <Banner/>
    <Explore/>
    <ChooseUs/>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
  
    </>
  )
}

export default App
