import React from 'react';

const UserRow = ({ user }) => {
    return (
        <tr>
            <td></td>
            <td className='text-black'>{user._id}</td>
            <td> {user.email}</td>
            <th className='text-secondary'> {user.name}</th>

        </tr>

    );
};

export default UserRow;