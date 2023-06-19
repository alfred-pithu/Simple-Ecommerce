import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div>
            <h1>{product.name}</h1>
            <img className='w-48' src={product.image} alt="" />
        </div>
    );
};

export default ProductCard;