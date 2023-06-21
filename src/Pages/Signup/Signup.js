import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { toast } from 'react-hot-toast';
import axios from 'axios';

const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const navigate = useNavigate();

    const { createUser, updateUser } = useContext(AuthContext)

    const [signupError, setSignupError] = useState('')

    // Form Handler
    const handleSignup = (data) => {
        setSignupError('')
        createUser(data.email, data.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;

                if (user) {
                    toast.success('Successfully Registered!')

                    // updating user's name from here
                    const userInfo = {
                        displayName: data.name,
                    }
                    updateUser(userInfo)
                        .then((data) => {
                            const userDataForDatabase = {
                                name: user.displayName,
                                email: user.email
                            };
                            axios.post("https://simple-ecom.onrender.com/users", userDataForDatabase)
                                .then(res => console.log(res.data))
                                .catch(err => {
                                    console.error(err)
                                })
                        })
                        .catch((err) => {
                            console.log(err)
                        })

                    navigate('/')
                }

            }

            )
            .catch((error) => {
                console.log(error)
                setSignupError(error)
                // ..
            });
    }

    return (
        <div className='h-[800px]  flex justify-center items-center '>

            <div className='w-96 p-7  shadow-lg ' >

                <h2 className='text-xl text-center'>Signup</h2>

                {/* Form starts here */}
                <form onSubmit={handleSubmit(handleSignup)}>

                    {/* Name  */}
                    <div className="form-control w-full max-w-xs">

                        <label className="label">
                            <span className=" label-text ">Name</span>
                        </label>

                        <input type="text" className="input input-bordered w-full max-w-xs"
                            {...register("name",
                                {
                                    required: {
                                        value: true,
                                        message: 'Please Provide your name'
                                    }
                                })
                            }
                        />
                        {errors.name && <p className='text-red-600'>{errors.name.message}</p>}

                    </div>
                    {/* Email  */}
                    <div className="form-control w-full max-w-xs">

                        <label className="label">
                            <span className=" label-text ">Email</span>
                        </label>

                        <input type="email" className="input input-bordered w-full max-w-xs"
                            {...register("email",
                                { required: 'Please provide your email' }

                            )}
                        />
                        {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
                    </div>

                    {/* Password */}
                    <div className="form-control w-full max-w-xs">

                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>

                        <input type="password" className="input input-bordered w-full max-w-xs"
                            {...register("password", {
                                required: " Password is required",
                                minLength: { value: 6, message: 'Password must be 6 character long' },
                                pattern: {
                                    value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                                    message: 'Password must be strong'
                                }
                            }
                            )}
                        />

                        {errors.password && <p className='text-red-600'>{errors.password.message}</p>}

                    </div>

                    {/* Submit Button */}
                    <input className='btn mt-5 w-full btn-acc' type="submit" value={'Sign Up'} />

                    {
                        signupError && <p className='text-red my-3'>{signupError}</p>
                    }

                </form>

                <p className='mt-3'>Already have an account ? <Link className='text-secondary' to={'/login'}>Login </Link></p>

                {/* Divider */}
                <div className="divider">OR</div>

                {/* Continue With Google Btn */}
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Signup;