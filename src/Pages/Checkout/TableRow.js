import React from 'react';

const TableRow = ({ product }) => {
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
            <td>{product?.rating}</td>
            <th>
                ${product?.price}
            </th>
        </tr>

    );
};

export default TableRow;