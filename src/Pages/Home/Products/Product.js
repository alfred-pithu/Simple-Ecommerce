import React from 'react';

const Product = ({ product }) => {
    const price = product.price;
    const previousPrice = price * 1.3;

    return (


        <div className=' mx-auto '>
            <div className=' h-fit group mx-auto'>
                <div className='relative overflow-hidden  h-48 w-52 flex justify-center items-center'>
                    <img className='' src={product.image} alt="" />

                    <div className=" absolute h-full w-full  flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <button className="bg-black text-white px-5">Add to cart</button>
                    </div>
                </div>
            </div>

            <h2 className='text-lg'>{product.name}</h2>
            <h3 className='text-xs text-secondary font-semibold my-1'>${product.price}</h3>
            <h4 className='text-xs'>{product.rating} ⭐ <span className='text-gray-500'>(55)</span></h4>

        </div >

        // <div className=' mx-auto '>
        //     <div className='relative overflow-hidden'>
        //         <img className=' p-9 ' src={product.image} alt="" />
        //         <span className=' absolute top-1  bg-secondary text-[10px] font-semibold text-white px-2 py-1 rounded-sm'>-20%</span>
        //     </div>

        //     <h2 className='text-lg'>{product.name}</h2>
        //     <h3 className='text-xs text-secondary font-semibold'>${product.price}</h3>
        //     <h4 className='text-xs'>{product.rating} ⭐ <span className='text-gray-500'>(55)</span></h4>
        //     {/* <button className='text-xs w-full border border-gray-950 rounded-sm px-4 py-[2px] hover:bg-black hover:text-white'>Add To Cart</button> */}
        // </div >
    );
};

export default Product;