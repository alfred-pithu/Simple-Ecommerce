import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AdminAllUser = () => {
    const [allUsers, setAllUsers] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5000/users")
            .then(res => {
                setAllUsers(res.data)
                console.log(res.data)
            })
            .catch(err => console.error(err))
    }, [])

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

                        }

                    </tbody>



                </table>
            }
        </div>
    );
};

export default AdminAllUser;