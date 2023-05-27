import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { server } from '../server';

function ActivationPage() {
    const { activation_token } = useParams();
    const [error, setError] = useState(false);
    useEffect(() => {
        if (activation_token) {
            const activationMail = async () => {
                try {
                    const res = await axios.post(`${server}/user/activation`, { activation_token })
                } catch (error) {
                    console.log(error.res.data.message)
                    setError(true)
                }
            }
            activationMail()

        }
    }, [activation_token])
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            {
                error ? (<p>Your token is expired</p>) : (<p> Your account has been created successfully.Now please login with your credentials.</p>)
            }

        </div>
    )
}

export default ActivationPage
