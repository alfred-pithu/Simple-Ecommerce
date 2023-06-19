import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/products')
            .then(res => {
                setAllProducts(res.data)
            })
            .catch(err => {
                console.error(err)
            })
    }, [])

    return (
        <div className='grid grid-cols-3 gap-y-20 border'>
            {
                allProducts.map((p) => <Product product={p} key={p._id}></Product>)
            }
        </div>
    );
};

export default Products;