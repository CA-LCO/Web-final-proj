import React, { useContext } from 'react';
import{Link} from 'react-router-dom';
import  {CartContext}  from '../component/CartContext/CartContext';
import QuantityBtn from '../component/QuantityBtn/QuantityBtn';

export default function Checkout() {
let {cartItems}= useContext(CartContext)

let cartEmpty = cartItems.length<= 0 ? true : false



let grandTotal = cartItems.reduce((total, product)=>{
  return total += product.price*product.quantity
},0)
const freeShippingPrice = 400
return (
    <div className='checkOutPage'>
    <h2>Your Shopping Cart</h2>
    {
      cartEmpty &&
      <div>
          No items in your shopping cart <br/>
          <Link to="/BestSellerPage">Go to Best Seller Page to Shop now!</Link>
      </div>
    }

    {
      !cartEmpty && 
      <div>
        <div id="cartSection">  
        { /* product array */
          cartItems.map(product => (
            <div key={product.id}> 
              <img src={product.url} alt={product.name} className="checkout-img" />
              {/* <img src=Zproduct.url + product.url} alt={product.name} className="checkout-img" /> */}
              {product.name}<br></br>
              ${product.price}<br></br>
              {product.brand}<br></br>
              Total Quantity: {product.quantity}<br></br>
              <QuantityBtn productData={product} />
            </div>
            ))
        }
      </div>

      <div id="checkOutSection">
        <div>全部貨品總共</div>
        <div>${grandTotal}</div>
        {
          /* free shipping price */
          grandTotal >= freeShippingPrice ?
          <div>我們免費送貨</div> :
          <div>${freeShippingPrice}免費送貨<br/>
          還差${freeShippingPrice-grandTotal}</div>
        }
      </div>
    </div>
    }

    </div>
  ) 
}
