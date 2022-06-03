import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Login from "./pages/Login";
import Cart from "./pages/Cart"; 
import Navbar from "./components/Navbar";
import Register from "./pages/Register";

const App = () => {
  return (
    <div>
      <Home/>
      <Cart/>
    </div>
    
  // <Router>
  //   <div>
  //         <Switch>
              
  //         <Route path="/register">
  //           <Register />
  //         </Route>
  //       </Switch>
        
  //   <Route path="/Register">
  //       <Register/>
  //     </Route>
      
  // </div>
  // </Router>
  
  );
};

export default App;