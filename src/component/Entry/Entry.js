import React from "react";
import ProductData from "../../data/ProductData";

function createEntry(ProductData){
 return <Entry
      key={ProductData.id}
      name={ProductData.name}
      price={ProductData.price}
      brand={ProductData.brand}
 />
}


function Entry() {
  return (
    <div>
      <h1>
        <span>Best Seller</span>
      </h1>

      <dl className="dictionary">
      {ProductData.map (createEntry)}
      </dl>
    </div>
  );
}

export default Entry;

