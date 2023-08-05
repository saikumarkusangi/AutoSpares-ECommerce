import { lazy,Suspense } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import PageNotFount from "./components/pages/Pagenotfound";
import Cart from "./components/pages/Cart";
import Shop from "./components/pages/Shop";
import Product from "./components/pages/Product";
import React, { useEffect } from "react";
import PrivacyPolicy from "./components/pages/PrivacyPolicy";
import TermsAndConditions from "./components/pages/TermsAndConditions";
import RefundPolicy from "./components/pages/RefundPolicy";
import Categories from "./components/pages/Categories";
import AOS from "aos";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/signup";
import Account from "./components/pages/Account";
import SearchForm from "./components/SearchForm";
const Home = lazy(() => import ("./components/pages/Home"));


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
       <Suspense fallback={
        <div>
         <img className="w-10 flex flex-col justify-center items-center" src="https://i.pinimg.com/originals/3d/6a/a9/3d6aa9082f3c9e285df9970dc7b762ac.gif" alt="loading..."/>
        </div>
       }>
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
            <Route path="/product/:id" element={<Product/>} />
            <Route path="/auth/login" element={<Login/>} />
            <Route path="/auth/sign-up" element={<SignUp/>} />
            <Route path="/search-form" element={<SearchForm/>} />
            <Route path="/account" element={<Account/>} />
          </Routes>
      </Layout>
       </Suspense>
      </BrowserRouter>
     </div>
  );
}

export default App;
