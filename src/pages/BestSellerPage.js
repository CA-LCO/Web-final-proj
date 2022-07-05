import React from "react";
import ReactDOM from 'react-dom';
import Miss_me_white from "../img/BestSeller/Miss_me_white.jpg";

function BestSellerPage (props){
    return (
    <div>
        <h1>Our Best Selling item</h1>
        <img
            className= "card-img"
            src= {props.img}
            alt= "product-img"
        />
        <p>{props.price}</p>
        <p>{props.brand}</p>
    </div>
    );
}

ReactDOM.render (
    <div>
        <BestSellerPage
        name="Miss Me White"
        image= "Miss_me_white"
        price= "$270"
        brand= "S2N Taiwan"
        />
    </div>,
    document.getElementById("root")
);

export default BestSellerPage;









// import { useState } from "react";
// import { allState } from "../../features/shopSlice";
// import { Link, useOutletContext, useParams, Outlet, useNavigate } from "react-router-dom";
// import ProductData from "../../data/ProductData";
// import PropTypes from "prop-types";



// const BestSellerPage = () => {
//   return (
//     <div className="page vh-100 d-flex flex-column justify-content-center align-items-center  text-capitalize fw-bold">
//       BestSeller
//     </div>
//   );
// };

// export default BestSellerPage;


// const BestSellerPage = () => {
//   // function BestSellerPage() {
//     // const state = useSelector(allState);
//     const getCategoryList = (products) => {
//       const categoryList = ["Shop All"];
//       ProductData.forEach((ProductData) => {
//         if (!categoryList.includes(ProductData.category)) {
//           categoryList.push(ProductData.category);
//         };
//       });
//       return categoryList;
//     };
//     const categoryList = getCategoryList(ProductData);
  
//     const [category, setCategory] = useState("Shop All");
  
//     let navigate = useNavigate();
  
//     const onChangeCategory = (e) => {
//       setCategory(e.target.id);
//       navigate(`/shop/${e.target.id}`);
//     };
  
//     return (
//       <div className="shop-page">
//         <ShopCategorySideNav 
//           categoryList={categoryList}
//           currentCategory={category}
//           onChangeCategory={onChangeCategory}
//         />
//         <Outlet />
//       </div>
//     );
//   };
  
//   function ShopCategorySideNav({ categoryList, currentCategory, onChangeCategory }) {
//     return (
//       <nav className="shop-category-sidenav">
//         {categoryList.map((category) => {
//           return (
//             <li key={category}>
//               <button 
//                 onClick={onChangeCategory}
//                 id={category}
//                 className={category === currentCategory
//                   ?
//                   "shop-category-sidenav-button selected"
//                   :
//                   "shop-category-sidenav-button"
//                 }
//               >
//                 {category}
//               </button>
//             </li>
//           );
//         })}
//       </nav>
//     );
//   };
  
//   function ShopCategoryMain({ category = "Shop All" }) {
//     let params = useParams();
//     const currentCategory = params.category || category;
  
//     const getItemList = (category, ProductData) => {
//       if (category === "Shop All") {
//         return ProductData;
//       } else {
//         return ProductData.filter((product) => product.category === category);
//       };
//     };
//     const itemList = getItemList(currentCategory, ProductData);
  
//     return (
//       <div className="shop-category-main">
//         <ShopCategoryHeader category={currentCategory} />
//         <ShopItemGrid itemList={itemList} />
//       </div>
//     );
//   };
  
//   function ShopCategoryHeader({ category }) {
//     return (
//       <h3 className="shop-category-header">{category}</h3>
//     );
//   };
  
//   function ShopItemGrid({ itemList }) {
//     let navigate = useNavigate();
  
//     const onClickItemCard = (e) => {
//       navigate(`/product/${e.target.id}`);
//     };
  
//     return (
//       <div className="shop-item-grid">
//         {itemList.map((item) => {
//           return (
//             <ShopItemCard 
//               item={item}
//               key={item.id}
//               onClickItemCard={onClickItemCard}
//             />
//           );
//         })}
//       </div>
//     );
//   };
  
//   function ShopItemCard({ item, onClickItemCard }) {
//     return (
//       <div 
//         className="shop-item-card"
//         onClick={onClickItemCard}
//         id={item.id}
//       >
//         <img src={item.url} alt={item.name} className="shop-item-card-image" id={item.id}/>
//         <p className="shop-item-card-name" id={item.id}>{item.name}</p>
//         <p className="shop-item-card-price" id={item.id}>{item.price}</p>
//       </div>
//     );
//   };
  
//   ShopCategorySideNav.propTypes = {
//     categoryList: PropTypes.arrayOf(PropTypes.string),
//     currentCategory: PropTypes.string.isRequired,
//     onChangeCategory: PropTypes.func.isRequired
//   };
  
//   ShopCategoryMain.propTypes = {
//     category: PropTypes.string
//   };
  
//   ShopCategoryHeader.propTypes = {
//     category: PropTypes.string.isRequired
//   };
  
//   ShopItemGrid.propTypes = {
//     itemList: PropTypes.arrayOf(PropTypes.object).isRequired
//   };
  
//   ShopItemCard.propTypes = {
//     item: PropTypes.object.isRequired,
//     onClickItemCard: PropTypes.func.isRequired
//   };
  
//   export { BestSellerPage, ShopCategoryMain };
  




