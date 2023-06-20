import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const price = product.price;
    const previousPrice = Math.ceil(price * 1.2);

    return (


        <div className=' mx-auto '>
            <div className=' h-fit group mx-auto'>
                <div className='relative overflow-hidden  h-48 w-52 flex justify-center items-center'>
                    <img className='' src={product.image} alt="" />
                    <span className=' absolute top-1 right-0  bg-secondary text-[10px] font-semibold text-white px-2 py-1 rounded-sm'>-20%</span>

                    <div className=" absolute h-full w-full  flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <button className="bg-black text-white px-5">
                            <Link to={`/product/${product._id}`}>
                                View Details
                            </Link>


                        </button>
                    </div>
                </div>
            </div>

            <h2 className='text-lg'>{product.name}</h2>
            <div className='flex items-center my-2'>
                <h3 className='text-xs text-secondary font-semibold '>${product.price}</h3>
                <h3 className='line-through text-xs text-gray-600 ms-2'>$ {previousPrice}</h3>
            </div>
            <h4 className='text-xs'>{product.rating} ⭐ <span className='text-gray-500'>(55)</span></h4>

        </div >

    );
};

export default Product;