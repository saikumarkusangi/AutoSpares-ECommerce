import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/pages/Home";
import PageNotFount from "./components/pages/Pagenotfound";
import Policy from "./components/pages/Policy";
import Cart from "./components/pages/Cart";
import Shop from "./components/pages/Shop";
import Product from "./components/pages/Product";

function App() {
  return (
     <div>
     <BrowserRouter>
      <Layout>
        
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="*" element={<PageNotFount/>} />
            <Route path="/policy" element={<Policy/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/shop/:heading" element={<Shop/>} />
            <Route path="/product/:title" element={<Product/>} />
          </Routes>
      
      </Layout>
      </BrowserRouter>
     </div>
  );
}

export default App;
