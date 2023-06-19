import React from 'react';

const Product = ({ product }) => {
    const price = product.price;
    const previousPrice = price * 1.3;

    return (
        <div className=' mx-auto'>
            <div className='relative'>
                <img className=' p-9 ' src={product.image} alt="" />
                <span className=' absolute top-1  bg-secondary text-[10px] font-semibold text-white px-2 py-1 rounded-sm'>-20%</span>
            </div>
            <h2 className='text-lg'>{product.name}</h2>
            <h3 className='text-xs text-secondary font-semibold'>${product.price}</h3>
            <h4 className='text-xs'>{product.rating} ⭐ <span className='text-gray-500'>(55)</span></h4>
        </div >
    );
};

export default Product;