// import { useState } from "react";
// import { Outlet, useNavigate, useParams } from "react-router-dom";
// import ProductData from '../data/ProductData';
// import PropTypes from "prop-types";
// import React from 'react';
// import ShopCategoryMain from "../component/ShopCategoryMain/ShopCategoryMain";

// function BestSellerPage() {
//   const getCategoryList = (products) => {
//     const categoryList = ["Shop All"];
//     products.forEach((product) => {
//       if (!categoryList.includes(product.category)) {
//         categoryList.push(product.category);
//       };
//     });
//     return categoryList;
//   };
//   const categoryList = getCategoryList(ProductData);

//   const [category, setCategory] = useState("Shop All");

//   let navigate = useNavigate();

//   const onChangeCategory = (e) => {
//     setCategory(e.target.id);
//     navigate(`/shop/${e.target.id}`);
//   };

//   return (
//     <div className="shop-page">
//       <ShopCategorySideNav 
//         categoryList={categoryList}
//         currentCategory={category}
//         onChangeCategory={onChangeCategory}
//       />
//       <Outlet />
//     </div>
//   );
// };

// function ShopCategorySideNav({ categoryList, currentCategory, onChangeCategory }) {
//   return (
//     <nav className="shop-category-sidenav">
//       {categoryList.map((category) => {
//         return (
//           <li key={category}>
//             <button 
//               onClick={onChangeCategory}
//               id={category}
//               className={category === currentCategory
//                 ?
//                 "shop-category-sidenav-button selected"
//                 :
//                 "shop-category-sidenav-button"
//               }
//             >
//               {category}
//             </button>
//           </li>
//         );
//       })}
//     </nav>
//   );
// };


// ShopCategorySideNav.propTypes = {
//   categoryList: PropTypes.arrayOf(PropTypes.string),
//   currentCategory: PropTypes.string.isRequired,
//   onChangeCategory: PropTypes.func.isRequired
// };

// ShopCategoryMain.propTypes = {
//   category: PropTypes.string
// };

// export default BestSellerPage;  






import React from "react";
import ProductData from "../data/ProductData";
import QuantityBtn from '../component/QuantityBtn/QuantityBtn';


function BestSellerPage() {
  return (
    <div>
      <h1>
        <span>Entry function</span>
      </h1>

      <dl className="dictionary">
      {ProductData.map(function(object){
        return (<div>
      <h2>{object.id}</h2>
      <h2>{object.name}</h2>
      <h2>${object.price}</h2>
      <img src={object.url} alt={object.name} className="shop-item-card-image" id={object.id}/>
      <QuantityBtn productData={object}/>

      </div>
    )
      })}
      </dl>
    </div>
  );
}

export default BestSellerPage;

