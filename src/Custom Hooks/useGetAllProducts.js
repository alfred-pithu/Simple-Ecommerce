import React, { useEffect, useState } from 'react';
import axios from 'axios';

const useGetAllProducts = () => {
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

    return allProducts;
};

export default useGetAllProducts;