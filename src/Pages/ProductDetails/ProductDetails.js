import React from 'react';
import { useParams } from 'react-router-dom';
import useGetAllProducts from '../../Custom Hooks/useGetAllProducts';

const ProductDetails = () => {
    let { id } = useParams();
    const allProducts = useGetAllProducts();
    console.log(allProducts)
    return (
        <div>
            <h2>{id}</h2>
        </div>
    );
};

export default ProductDetails;