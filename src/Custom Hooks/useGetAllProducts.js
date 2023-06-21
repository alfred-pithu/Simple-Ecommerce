import { useEffect, useState } from 'react';
import axios from 'axios';

const useGetAllProducts = () => {
    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        axios.get('https://simple-ecom.onrender.com/products')
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