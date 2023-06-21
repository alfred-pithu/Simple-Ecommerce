import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import axios from 'axios';
import TableRow from './TableRow';

const Checkout = () => {
    const [refetch, setRefetch] = useState(false)
    const [dbUserCartInfo, setDbUserCartInfo] = useState([])
    const { user } = useContext(AuthContext);
    const userEmail = user?.email;
    // console.log(userEmail)

    useEffect(() => {
        axios.get(`http://localhost:5000/users/${userEmail}`)
            .then(res => {
                setDbUserCartInfo(res.data.cart);
            })
            .catch(err => {
                console.error(err)
            })
    }, [refetch])

    // console.log(dbUserCartInfo)

    return (
        <div className="overflow-x-auto h-screen">
            <h2 className='text-lg mt-3 text-center font-bold '>Products Added to the Cart</h2>
            <hr className='w-1/3 mx-auto mb-8 mt-2  ' />
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Product Name</th>
                        <th>Rating</th>
                        <th>Price</th>
                        <th></th>
                        <th></th>

                    </tr>
                </thead>
                <tbody>

                    {
                        dbUserCartInfo?.map((product) => {
                            const parsedProduct = JSON.parse(product)

                            return <TableRow product={parsedProduct} refetch={refetch} setRefetch={setRefetch} key={parsedProduct._id} ></TableRow>
                        })
                    }

                </tbody>



            </table>
        </div>
    );
};

export default Checkout;

