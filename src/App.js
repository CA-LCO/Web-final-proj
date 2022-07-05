import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { allState, fetchComments, fetchProducts } from "./features/shopSlice";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Products from "./component/products/products";
// import {BestSellerPage, ShopCategoryMain} from "./pages/BestSellerPage";
import BestSellerPage from "./pages/BestSellerPage";
import NoPage from "./pages/noPage";
import Hero from "./component/hero/hero";
import Login from "./component/account/login";
import Register from "./component/account/register";
import Footer from "./component/footer/footer";
import Header from "./component/header/header";
// import Loading from "./component/loading/loading";
import AllShop from "./component/shop/allShop";
import Breadcrumb from "./component/breadCrumb/breadCrumb";
import SingleBlog from "./component/singleBlog/singleBlog";
import "react-loading-skeleton/dist/skeleton.css";
import ScrollTop from "./component/scrollTop/scrollTop";
// import Entry from "./component/Entry/Entry";

const App = () => {
  const dispatch = useDispatch();
  const state = useSelector(allState);

  React.useEffect(() => {
    dispatch(fetchProducts());
    // dispatch(fetchComments());
  }, []);

  return (
    <>
      {/* {state.loading === "loading" || state.loading === "faild" ? (
        <Loading />
      ) : (
        <> */}
      <Header />
      <ScrollTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="BestSellerPage" element={<BestSellerPage />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="products" element={<Products />} />
        <Route path="shop" element={<AllShop />} />
        <Route path="singleBlog" element={<SingleBlog />} />
        {/* <Route path="Entry" element={<Entry />} /> */}
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer />
      {/* </>
      )} */}
    </>
  );
};

export default App;
