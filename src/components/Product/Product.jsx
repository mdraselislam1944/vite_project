import React from 'react';
import './Product.css';
const Product = (prob) => {
const handleProduct=prob.handleProduct;
    const {img,id,name,seller,quantity,price,ratings}=prob.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <h6 className='product-name'>{name}</h6>
            <p className='product-price'>Price: ${price}</p>
            <p>Manufacture {seller}</p>
            <p>Rating {ratings} star</p>
            </div>
         <button onClick={()=>{handleProduct(prob.product)}} className='btn-cart'>Add To Card</button>
        </div>
    );
};

export default Product;