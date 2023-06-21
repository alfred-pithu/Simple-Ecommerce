import React from 'react';

const OrderRow = ({ order }) => {
    return (
        <tr>
            <td></td>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className=" w-12 h-12">
                            <img src={order?.productImage} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>

                </div>
            </td>
            <td className='text-black'>{order?._id}</td>
            <th className='text-secondary'> {order?.userEmail}</th>
            <td> {order?.productName}</td>
            <td> {order?.price}</td>

        </tr>
    );
};

export default OrderRow;