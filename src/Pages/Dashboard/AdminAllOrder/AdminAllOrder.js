import axios from 'axios';
import React, { useEffect, useState } from 'react';
import OrderRow from './OrderRow';

const AdminAllOrder = () => {
    const [allOrders, setAllOrders] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/orders')
            .then(res => {
                setAllOrders(res.data)
            })
            .catch(err => console.error(err))
    }, [])
    return (
        <div className='lg:ms-12 '>
            <h2 className='text-center text-2xl mt-3 font-semibold '>  <span className='border-b-4 border-secondary '>All Orders</span> </h2>
            <hr className='w-1/3 mx-auto  h-1 mb-5' />




            <table className="table ">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th>Order Id</th>
                        <th>Client Email</th>
                        <th>Product Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allOrders.map(order => <OrderRow order={order} key={order._id}></OrderRow>)
                    }
                </tbody>
            </table>



        </div>
    );
};

export default AdminAllOrder;