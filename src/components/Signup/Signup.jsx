import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { RxAvatar } from 'react-icons/rx'
import { Link } from 'react-router-dom'
import styles from '../../styles/styles';
const Signup = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("")
    const [password, setPassword] = useState("");
    const [avatar, setAvatar] = useState("")
    const [visible, setVisible] = useState(false);
    const handleSubmit = () => {

    }
    const handleFileUploadChange = (e) => {
        const file = e.target.files[0];
        setAvatar(file)
    }
    return (
        <div className='min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
            <div className='sm:mx-auto sm:w-full sm:max-w-md'>
                <h2 className='text-center text-3xl font-bold text-gray-800'>Sign up as a new user</h2>
            </div>
            <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md bg-white'>
                <div className='py-8 px-4 shadow-lg sm:rounded-lg sm:px-10'>
                    <form className="space-y-6">
                        <div>
                            <label htmlFor='name' className='block text-sm font-medium text-gray-600'>Full Name</label>
                            <div className='mt-1'>
                                <input onChange={(e) => setName(e.target.value)} type="text" name='name' required autoComplete='name' value={name} className="block appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                            </div>
                        </div>
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
                        <div>
                            <label className='block font-medium text-sm text-gray-900' htmlFor='avatar'></label>
                            <div className='mt-2 flex items-center'>
                                <span className='inline-block h-8 w-8 rounded-full overflow-hidden'>
                                    {avatar ? (<img className='w-full h-full object-cover rounded-full' src={URL.createObjectURL(avatar)} alt="avatar" />) : (<RxAvatar className="h-8 w-8" />)}
                                </span>
                                <label htmlFor='file-input' className='ml-5 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50'>
                                    <span>Upload a file</span>
                                    <input onChange={handleFileUploadChange} className='sr-only' type="file" name="avatar" id="file-input" accept=".jpg,.jpeg,.png" />
                                </label>
                            </div>

                        </div>
                        <div>
                            <button className=' text-white bg-blue-600 hover:bg-blue-700  group relative w-full h-[40px] flex justify-center py-2 px-4 border border-trasparent text-sm font-medium rounded' type='submit'>Sign up</button>
                        </div>
                        <div className={`${styles.normalFlex} w-full justify-center`}>
                            <h4>Already have an account?</h4>
                            <Link to={"/login"} className='ml-1 text-blue-500'>Login</Link>
                        </div>

                    </form>

                </div>

            </div >
        </div >
    )
}

export default Signup
