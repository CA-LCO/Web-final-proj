import React from 'react';
import { useContext, useState } from 'react';
import { CartContext } from '../CartContext/CartContext';
// import ProductData from "../../data/ProductData";

export default function QuantityBtn({productData}) {
const {cartItems, setCartItems }= useContext (CartContext)

//購物車內有冇該產品 
let productIndexInCart = cartItems.findIndex((element) =>{
    return element.id === productData.id
})

//findIndex
//如果購物車內找到該件產品 ＝> 返回索引位置 (eg 0, 1, 2...)
//該件產品沒有被加入過去購物車 => 返回 -1

let [numInCart, setNumInCart]= useState (
    (productIndexInCart=== -1) ? 0 : cartItems[productIndexInCart].quantity
)
const handleAdd=()=> {
    if(productIndexInCart === -1)
    {
        //購物車本身沒有，在cartItems array中加個新element (object)
        setCartItems(
            [{
                id: productData.id,
                name: productData.name,
                price: productData.price,
                brand: productData.brand,
                image: productData.image,
                quantity: 1
            }, 
            ...cartItems]
        )
    }
    else{
         //購物車本身有該產品，只加個quantity
         let newCartArray= [...cartItems]
         newCartArray[productIndexInCart].quantity++
         setCartItems(newCartArray)
    }
    setNumInCart(numInCart +1)
}

const handleSubtract=()=> {
    if(cartItems[productIndexInCart].quantity=== 1)
    {
        //如產品只剩下一件的話，就remove object
        let newCartArray= [...cartItems]
        newCartArray.splice(productIndexInCart,1)
        setCartItems(newCartArray)
    }
    else
    {
        //只減個quantity
        let newCartArray= [...cartItems]
         newCartArray[productIndexInCart].quantity--
         setCartItems(newCartArray)
    }

    setNumInCart(numInCart-1)
}

  return (
    <div>
        {
            (numInCart) === 0 ?
        <div onClick={handleAdd}>Add to Cart</div> :
        <div>
            <span onClick={handleSubtract}>-</span>
            {numInCart} 件
            <span onClick={handleAdd}>+</span>
        </div>
        }
    </div>
  )
}
