import { useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import ProductData from '../../data/ProductData';
import PropTypes from "prop-types";
import React from 'react';

function ShopCategoryMain({ category = "Shop All" }) {
  let params = useParams();
  const currentCategory = params.category || category;

  const getItemList = (category, products) => {
    if (category === "Shop All") {
      return products;
    } else {
      return products.filter((product) => product.category === category);
    };
  };
  const itemList = getItemList(currentCategory, ProductData);

  return (
    <div className="shop-category-main">
      <ShopCategoryHeader category={currentCategory} />
      <ShopItemGrid itemList={itemList} />
    </div>
  );
};

function ShopCategoryHeader({ category }) {
  return (
    <h3 className="shop-category-header">{category}</h3>
  );
};

function ShopItemGrid({ itemList }) {
  let navigate = useNavigate();

  const onClickItemCard = (e) => {
    navigate(`/product/${e.target.id}`);
  };

  return (
    <div className="shop-item-grid">
      {itemList.map((item) => {
        return (
          <ShopItemCard 
            item={item}
            key={item.id}
            onClickItemCard={onClickItemCard}
          />
        );
      })}
    </div>
  );
};

function ShopItemCard({ item, onClickItemCard }) {
  return (
    <div 
      className="shop-item-card"
      onClick={onClickItemCard}
      id={item.id}
    >
      <img src={item.url} alt={item.name} className="shop-item-card-image" id={item.id}/>
      <p className="shop-item-card-name" id={item.id}>{item.name}</p>
      <p className="shop-item-card-price" id={item.id}>{item.price}</p>
    </div>
  );
};

ShopCategoryMain.propTypes = {
  category: PropTypes.string
};

ShopCategoryHeader.propTypes = {
  category: PropTypes.string.isRequired
};

ShopItemGrid.propTypes = {
  itemList: PropTypes.arrayOf(PropTypes.object).isRequired
};

ShopItemCard.propTypes = {
  item: PropTypes.object.isRequired,
  onClickItemCard: PropTypes.func.isRequired
};
 
export default ShopCategoryMain;

