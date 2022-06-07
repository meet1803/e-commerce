import Product from "./pages/Product";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./pages/ProductList";
import Login from "./pages/Login";
import Cart from "./pages/Cart"; 
import Navbar from "./components/Navbar";
import Register from "./pages/Register";

const App = () => {
  return (
    <>
      <Home/> 

       <Router>
          <Routes>  
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} /> 
          </Routes> 
      </Router>
      </>

  
  
  );
};

export default App;