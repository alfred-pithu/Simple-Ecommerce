import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useGetAllUsers from '../../Custom Hooks/useGetAllUsers';
import axios from 'axios';


const Login = () => {
    const allUsers = useGetAllUsers();
    let location = useLocation();
    const navigate = useNavigate();

    const from = location?.state?.from?.pathname || '/';

    const { signIn, googleSignIn } = useContext(AuthContext);

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const [loginError, setLoginError] = useState('');

    const [showPassword, setShowPassword] = useState(false);

    // Password show/hide function
    const showPasswordToggle = () => {
        setShowPassword(!showPassword);
    }

    // Sign in Handle function
    const handleLogin = data => {
        setLoginError('');
        // Sign In 
        signIn(data.email, data.password)
            .then((userData) => {
                // console.log(userData.user);
                userData.user && toast.success('Log in Successfull!')
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.log(error.message)
                setLoginError(error.message);
            })
    }

    // GOOGLE LOGIN
    const googleLogin = () => {
        setLoginError('');
        googleSignIn()
            .then((result) => {
                const user = result.user;
                // The signed-in user info.
                const userDataExistInDb = allUsers.find(u => u.email === user.email)
                if (!userDataExistInDb) {
                    // Saving the new user in the Database and creating a profile in the db
                    const userDataForDatabase = {
                        name: user.displayName,
                        email: user.email
                    };
                    axios.post("https://simple-ecom.onrender.com/users", userDataForDatabase)
                        .then(res => console.log(res.data))
                        .catch(err => {
                            console.error(err)
                        })
                }
                navigate(from, { replace: true });
            })
            .catch((error) => {
                const errorMessage = error.message;
                setLoginError(errorMessage)
                console.log(errorMessage)
            })
    }

    const regexValue = /^\S+@\S+$/i;
    return (
        <div className='h-[800px]  flex justify-center items-center '>

            <div className='w-96 p-7 shadow-lg' >
                <h4 className='text-xs mb-5 text-success text-center'> Admin Login - admin@gmail.com  <br /> Password: Pb123456</h4>
                <h2 className='text-xl text-center'>Login</h2>

                <form onSubmit={handleSubmit(handleLogin)}>

                    <div className="form-control w-full max-w-xs">

                        <label className="label">
                            <span className=" label-text ">Email</span>
                        </label>

                        <input type='text' className="input input-bordered w-full max-w-xs"{...register("email", {
                            required: true,
                            pattern: regexValue
                        }

                        )} />


                        {errors.email && <p className='text-red-600' role="alert">Please enter a valid email address</p>}

                    </div>

                    <div className="form-control w-full max-w-xs">

                        <label className="label"><span className="label-text">Password</span></label>

                        <input type={showPassword ? 'text' : 'password'} className="input input-bordered w-full max-w-xs"
                            {...register("password", {
                                required: true,
                                minLength:
                                    { value: 6, message: 'More than 6 please' },
                            })} />
                        <div className='flex my-3 ml-auto'>
                            <p className='text-xs mr-2'>Show Password</p>
                            <input onClick={showPasswordToggle} type="checkbox" className="toggle toggle-xs" />
                        </div>


                        {errors.password?.type === 'required' && <p className='text-red-600' role="alert">Password is required</p>}

                        {errors.password?.type === 'minLength'
                            &&
                            <p className='text-red-600' role="alert">{errors?.password?.message}</p>}

                        <label className="label"><span className="label-text cursor-pointer">Forgot Password ? </span></label>

                    </div>


                    <input className='btn w-full btn-acc' type="submit" value={'Login'} />

                    {/* Login Error */}
                    <div className='my-3 text-red-500 text-sm'>
                        {loginError && <p>{loginError}</p>}
                    </div>

                </form>

                <p className='mt-3'>New Here ? <Link className='text-secondary' to={'/signup'}>Create New Account </Link></p>

                <div className="divider">OR</div>

                <button onClick={googleLogin} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;