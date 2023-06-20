import Product from './Product';
import useGetAllProducts from '../../../Custom Hooks/useGetAllProducts';

const Products = () => {
    // Getting all the product data from the custom hook useGetAllProducts
    const allProducts = useGetAllProducts()

    return (
        <div className='  py-20'>
            <h2 className='mb-8 text-xl font-semibold text-center'> <span className='border-b-[3px]  border-[#DB4444]'>All Products</span></h2>
            <div className=' grid grid-cols-1 lg:grid-cols-3 gap-y-20'>
                {
                    allProducts.map((p) => <Product product={p} key={p._id}></Product>)
                }
            </div>

        </div>
    );
};

export default Products;