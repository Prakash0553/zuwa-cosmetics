import { Routes, Route } from "react-router";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import ProductDetail from "./pages/ProductDetails";
import { useState } from "react";
import ShoppingCart from "./components/Cart";
import Products from "./pages/Products";
import AdminDashboard from "./admin/AdminDashboard";
import AddProduct from "./admin/AddProduct";
import AddCategory from "./admin/AddCategory";
import Shop from "./pages/Shop";

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <Navbar onCartClick={() => setIsCartOpen(true)} />
      <ShoppingCart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail" element={<ProductDetail />} />
        <Route path="/products/:id" element={<ProductDetail/>} />
        <Route path="/products" element={<Products />} />
        <Route path="/shop" element={<Shop/>}/>

        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/add" element={<AddProduct />} />
        <Route path="/admin/addcat" element={<AddCategory/>}/>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
