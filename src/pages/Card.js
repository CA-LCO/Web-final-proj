// import React from 'react';
// import QuantityBtn from '../component/QuantityBtn/QuantityBtn';
// import {useState,useEffect} from 'react';

// let cardList =[
//     {"id": 1,"name": "Miss Me White", "price":"240","brand": "S2N Taiwan", "image": "Miss-me.jpg"},
//     {"id": 2,"name": "YOF Athletica Liberty Active Bra", "price":"205","brand": "YOF Athletica", "image": "OrangePinkBra.jpg"},
//     {"id": 3,"name": "S2N PERFECT SHAPE Olive", "price":"350","brand": "S2N Taiwan", "image": "PerfectShape_Olive.jpg"},
//     {"id": 4,"name": "S2N Someday Rose", "price":"250","brand": "S2N Taiwan", "image": "t-shirt2.jpg"}
// ]

// function Card (){
//     return (
//     <div>
//         <h2 style={{backgroundColor:'orange', borderBottom: '5px solid red'}}>We sell activwear from Taiwan, Australia and Singapore</h2>
//         <div>
//         {
//             cardList.map(product=>(
//                     <div className="productBorder" key={product.id}> 
//                     <p>{product.name}</p><br/>
//                     <p>${product.price}</p><br/>
//                     <p>{product.brand}</p><br/>
//                     <img src={process.env.PUBLIC_URL+ product.image} className="product-img" alt={product.name} /><br/>
//                     <QuantityBtn productData={product}/>
//                     </div> 
//                 ))
//             }
//         </div>
//     </div>
//     )
// }

// export default Card;