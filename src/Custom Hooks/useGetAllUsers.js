import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useGetAllUsers = () => {
    const [allUsers, setAllUsers] = useState([])


    useEffect(() => {
        axios.get("https://simple-ecom.onrender.com/users")
            .then(res => {
                setAllUsers(res.data)
            })
            .catch(err => console.error(err))
    }, [])

    return allUsers;

};

export default useGetAllUsers;