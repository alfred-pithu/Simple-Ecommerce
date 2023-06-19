import axios from 'axios';
import { useEffect, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes/Routes'


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

  return (
    <div className='max-w-[1440px] mx-auto '>


      <RouterProvider router={router}></RouterProvider>




    </div>
  );
}

export default App;
