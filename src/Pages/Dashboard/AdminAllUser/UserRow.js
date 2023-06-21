import React from 'react';

const UserRow = () => {
    return (
        <tr>

            <td className='text-black'>{ }</td>
            <td>⭐ { }</td>
            <th className='text-secondary'> $ { }</th>

        </tr>

    );
};

export default UserRow;