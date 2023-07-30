import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/pages/Home";
import PageNotFount from "./components/pages/Pagenotfound";
import Cart from "./components/pages/Cart";
import Shop from "./components/pages/Shop";
import Product from "./components/pages/Product";
import { useEffect } from "react";
import PrivacyPolicy from "./components/pages/PrivacyPolicy";
import TermsAndConditions from "./components/pages/TermsAndConditions";
import RefundPolicy from "./components/pages/RefundPolicy";
import Categories from "./components/pages/Categories";
import AOS from "aos";

function App() {
    useEffect(()=>{
      AOS.init({
        once: true,
        duration:1000
      });
  },[]);

  
  function ScrollToTop() {
    const {pathname} = useLocation();
    useEffect(()=>{
      window.scrollTo(0,0);
    },[pathname])
    
  }

  return (
     <div>
     <BrowserRouter>
     <ScrollToTop/>
      <Layout>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="*" element={<PageNotFount/>} />
            <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
            <Route path="/terms-conditions" element={<TermsAndConditions/>} />
            <Route path="/refund-policy" element={<RefundPolicy/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/categories" element={<Categories/>} />
            <Route path="/shop/:heading" element={<Shop/>} />
            <Route path="/product/:title" element={<Product/>} />
          </Routes>
      </Layout>
      </BrowserRouter>
     </div>
  );
}

export default App;
