import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UserRow from './UserRow';
import useGetAllUsers from '../../../Custom Hooks/useGetAllUsers';

const AdminAllUser = () => {

    const allUsers = useGetAllUsers();

    return (
        <div className='lg:ms-12 '>
            <h2 className='text-center text-2xl mt-3 font-semibold '>  <span className='border-b-4 border-secondary '>All Users</span> </h2>
            <hr className='w-1/3 mx-auto  h-1 mb-5' />
            {
                <table className="table ">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Id</th>
                            <th>Email</th>
                            <th>Name</th>
                            <th></th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            allUsers.map((user) => <UserRow key={user._id} user={user}></UserRow>)
                        }

                    </tbody>



                </table>
            }
        </div>
    );
};

export default AdminAllUser;