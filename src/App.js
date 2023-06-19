
import axios from 'axios';
import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

function App() {
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

  console.log(allProducts)

  return (
    <div className='bg-white text-black h-full'>

      {
        allProducts.map((p) => <ProductCard product={p} key={p._id}></ProductCard>)
      }

    </div>
  );
}

export default App;
