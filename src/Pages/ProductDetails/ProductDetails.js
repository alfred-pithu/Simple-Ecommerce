import React from 'react';
import { useParams } from 'react-router-dom';
import useGetAllProducts from '../../Custom Hooks/useGetAllProducts';
import { toast } from 'react-hot-toast';

const ProductDetails = () => {
    let { id } = useParams();
    const allProducts = useGetAllProducts();
    const selectedProduct = allProducts.find((p) => p._id === id)
    console.log(selectedProduct);
    const loremText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit officiis corporis qui repudiandae voluptas nisi suscipit odio quo non laudantium';

    const addToCart = () => {
        toast.success(`${selectedProduct.name} has been added to cart`)
    }

    return (
        <div className=''>
            <div className="hero  ">
                <div className="hero-content flex-col lg:flex-row gap-x-40">

                    <img src={selectedProduct?.image} className="w-80  " alt='' />


                    <div className=' lg:w-1/3  text-center lg:text-left'>
                        <h2 className='text-5xl font-bold'>{selectedProduct?.name}</h2>
                        <div className='flex items-center py-6 justify-center lg:justify-start'>
                            <h3 className='text-lg text-secondary font-semibold '>${selectedProduct?.price}</h3>
                            <h3 className='line-through text-xs text-gray-600 ms-2'>$ {Math.ceil(selectedProduct.price * 1.2)}</h3>
                        </div>

                        <div className='flex items-center justify-center lg:justify-start gap-x-6'>
                            <h4 className='text-sm'>{selectedProduct?.rating} ⭐ <span className='text-gray-500'>(55)</span></h4>

                            <span className='text-sm text-gray-400'>|</span>

                            <h5 className='text-[12px] font-semibold text-green-400'>In Stock</h5>
                        </div>

                        <h5 className='text-[12px] text-gray-600 my-3 '>{loremText}</h5>

                        <hr />

                        <div className='text-sm text-gray-600 flex items-center my-3 gap-x-3  justify-center lg:justify-start'>

                            <h5>Size: </h5>

                            <h6 className='cursor-pointer text-xs border border-gray-400 rounded-md p-1 hover:bg-secondary hover:text-white hover:border-white'>XS</h6>

                            <h6 className='cursor-pointer text-xs border border-gray-400 rounded-md p-1 hover:bg-secondary hover:text-white hover:border-white'>S</h6>

                            <h6 className='cursor-pointer text-xs border border-gray-400 rounded-md p-1 hover:bg-secondary hover:text-white hover:border-white'>M</h6>

                            <h6 className='cursor-pointer text-xs border border-gray-400 rounded-md p-1 hover:bg-secondary hover:text-white hover:border-white'>L</h6>

                            <h6 className='cursor-pointer text-xs border border-gray-400 rounded-md p-1 hover:bg-secondary hover:text-white hover:border-white'>XL</h6>

                        </div>

                        <button onClick={addToCart} className="btn my-5 btn-secondary btn-xs text-white rounded-sm  px-10">Add To Cart</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;