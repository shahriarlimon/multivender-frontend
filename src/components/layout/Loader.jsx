import React from 'react';
import Lottie from "react-lottie";
import animationData from '../../Assets/Animation/animation.json'

const Loader = () => {
    const defaultOptions = {
        loop: false,
        autoPlay: true,
        animationData: animationData,
        rendererSetting: {
            preserveAspectRatio: "xMidYMid slice"
        }
    }
    return (
        <div className='w-full h-screen flex items-center justify-center '>
            <Lottie options={defaultOptions} width={300} height={300} /> 
        </div>
    )
}

export default Loader
