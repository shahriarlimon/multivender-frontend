import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import styles from '../../styles/styles';
import axios from 'axios'
import { server } from '../../server';
import { toast } from 'react-toastify';
const ShopLogin = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [visible, setVisible] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post(`${server}/shop/login-shop`, { email, password }, {
            withCredentials: true
        }).then((res) => {
            toast.success("Login Success!")
            navigate("/dashboard")
            window.location.reload(true)
        }).catch((error) => {
            toast.error(error.response.data.message)
        })
    }
    return (
        <div className='min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
            <div className='sm:mx-auto sm:w-full sm:max-w-md'>
                <h2 className='text-center text-3xl font-bold text-gray-800'>Login to your shop</h2>
            </div>
            <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md bg-white'>
                <div className='py-8 px-4 shadow-lg sm:rounded-lg sm:px-10'>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor='email' className='block text-sm font-medium text-gray-600'>Email Address</label>
                            <div className='mt-1'>
                                <input onChange={(e) => setEmail(e.target.value)} type="email" name='email' required autoComplete='email' value={email} className="block appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor='password' className='block text-sm font-medium text-gray-600'>Password</label>
                            <div className="mt-1 relative">
                                <input
                                    type={visible ? "text" : "password"}
                                    name="password"
                                    autoComplete="current-password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                />
                                {visible ? (
                                    <AiOutlineEye
                                        className="absolute right-2 top-2 cursor-pointer"
                                        size={25}
                                        onClick={() => setVisible(false)}
                                    />
                                ) : (
                                    <AiOutlineEyeInvisible
                                        className="absolute right-2 top-2 cursor-pointer"
                                        size={25}
                                        onClick={() => setVisible(true)}
                                    />
                                )}
                            </div>
                        </div>
                        <div className={`${styles.normalFlex} justify-between`}>
                            <div className={`${styles.normalFlex}`}>
                                <input className='h-4 w-4 text-blue-600 focus:ring-blue-500 rounded border-gray-300' type={"checkbox"} name="remember-me" id='remember-me' />
                                <label className='ml-2 block text-sm text-gray-900' htmlFor='remember-me'>Remember me</label>
                            </div>
                            <div className='text-sm'>
                                <a href='/' className='font-medium text-blue-600 hover:text-blue-500'>Forget Password</a>
                            </div>

                        </div>
                        <div>
                            <button className=' text-white bg-blue-600 hover:bg-blue-700  group relative w-full h-[40px] flex justify-center py-2 px-4 border border-trasparent text-sm font-medium rounded' type='submit'>Login</button>
                        </div>
                        <div className={`${styles.normalFlex} w-full justify-center`}>
                            <h4>Don't have an account?</h4>
                            <Link to={"/shop-create"} className='ml-1 text-blue-500'>Sign up</Link>
                        </div>

                    </form>

                </div>

            </div >
        </div >
    )
}

export default ShopLogin;
