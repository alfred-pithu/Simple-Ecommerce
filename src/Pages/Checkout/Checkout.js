import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import axios from 'axios';

const Checkout = () => {
    const [dbUserInfo, setDbUserInfo] = useState({})
    const { user } = useContext(AuthContext);
    const userEmail = user?.email;
    console.log(userEmail)

    useEffect(() => {
        axios.get(`http://localhost:5000/users/${userEmail}`)
            .then(res => {
                setDbUserInfo(res);
                console.log(dbUserInfo)
            })
            .catch(err => {
                console.error(err)
            })
    }, [])


    return (
        <div>

        </div>
    );
};

export default Checkout;