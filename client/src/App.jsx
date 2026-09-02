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
import Shop from "./pages/Shop";
import ProfileMenu from "./components/Profile";
import ViewCart from "./pages/Cart";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AddProduct from "./pages/admin/AddProduct";
import AddCategory from "./pages/admin/AddCategory";
import OrderList from "./pages/admin/AdminOrders";
import ProductList from "./pages/admin/AdminProducts";
import CategoryList from "./pages/admin/AdminCategories";
import Blogs from "./pages/Blogs";

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <>
      <Navbar
        onCartClick={() => setIsCartOpen(true)}
        onProfileClick={() => setIsProfileOpen(true)}
      />

      <ShoppingCart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      <ProfileMenu
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail" element={<ProductDetail />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/products" element={<Products />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<ViewCart/>}/>
        <Route path="/blogs" element={<Blogs/>}/>

        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/add" element={<AddProduct />} />
        <Route path="/admin/addcat" element={<AddCategory />} />
        <Route path="/admin/order" element={<OrderList />}/>
        <Route path="/admin/products" element={<ProductList/>}/>
        <Route path="/admin/category" element={<CategoryList/>}/>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
