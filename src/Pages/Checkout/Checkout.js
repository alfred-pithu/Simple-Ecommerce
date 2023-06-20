import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import axios from 'axios';
import TableRow from './TableRow';

const Checkout = () => {
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
    }, [])

    // console.log(dbUserCartInfo)

    return (
        <div className="overflow-x-auto h-screen">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Product Name</th>
                        <th>Rating</th>
                        <th>Price</th>

                    </tr>
                </thead>
                <tbody>

                    {
                        dbUserCartInfo.map((product) => {
                            const parsedProduct = JSON.parse(product)

                            return <TableRow product={parsedProduct} key={parsedProduct._id} ></TableRow>
                        })
                    }

                </tbody>



            </table>
        </div>
    );
};

export default Checkout;

