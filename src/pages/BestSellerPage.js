import React, { useContext } from "react";
import ProductData from "../data/ProductData";
import QuantityBtn from '../component/QuantityBtn/QuantityBtn';
import { CartContext } from "../component/CartContext/CartContext";
import styles from "../mainStyle/BestSellerPage.css";
import Link from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";



function BestSellerPage() {
  return (
    <div className="productcontainer">
      {/* <h1>
        <span>Entry function</span>
      </h1> */}

      {/* <dl className="dictionary"> */}
        {ProductData.map(function(object){
          return (
          <div className="cardcontainer">
            <img 
            src={object.url} 
            alt={object.name}  
            className="cardImage" 
            // id={object.id}
            />
            <h4 className="bestSellerName">{object.name}</h4>
            <p>${object.price}</p>
            <p>{object.brand}</p>
            {/* <h2>{object.id}</h2> */}
            <button className="addAnimation">
              <div className="buttonContainer" >
                <QuantityBtn productData={object} key={object.id}/>
              </div>    
            </button>
          </div>
            )
        })}
      {/* </dl> */}
    </div>
  );
}

export default BestSellerPage;

