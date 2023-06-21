import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const TableRow = ({ product, setRefetch, refetch }) => {
    const { user } = useContext(AuthContext)

    const userEmail = user.email;
    const itemId = product._id;

    const deleteProductFromCart = () => {

        axios.patch(`http://localhost:5000/users/${itemId}/cart/${userEmail}`)
            .then(res => {
                if (res) {
                    setRefetch(!refetch)
                    toast.success(`${product.name} has been deleted from cart`)
                }
            })
            .catch(err => console.error(err))

    }

    const placeOrder = () => {
        axios.post(`http://localhost:5000/orders/${itemId}/order/${userEmail}`)
            .then(res => {
                if (res) {
                    setRefetch(!refetch)
                    toast.success(`Order Placed for ${product.name}`)
                }
                console.log(res.data)
            })
            .catch(err => console.error(err))
    }

    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className=" w-12 h-12">
                            <img src={product?.image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>

                </div>
            </td>
            <td className='text-black'>
                {product.name}
            </td>
            <td>⭐ {product?.rating}</td>
            <th className='text-secondary'>
                $ {product?.price}
            </th>
            <td><button onClick={deleteProductFromCart} className="btn btn-xs btn-secondary text-white ">X</button></td>
            <td><button onClick={placeOrder} className="btn btn-xs btn-success text-white ">Place Oder</button></td>
        </tr>

    );
};

export default TableRow;