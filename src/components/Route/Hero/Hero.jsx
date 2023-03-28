import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../../styles/styles'


const Hero = () => {
    return (
        <div style={{
            backgroundImage:
                "url(https://themes.rslahmed.dev/rafcart/assets/images/banner-2.jpg)",
        }} className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.normalFlex}`}>
            <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
                <h1 className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[600] capitalize`}>
                    Best Collection for <br /> home decoration

                </h1>
                <p className='pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba]'>Discover a world of convenience and variety with our online shop, where you can find everything from the latest tech gadgets to trendy fashion accessories.Shop with confidence knowing that our secure payment system and dedicated customer service team are here to provide you with a hassle-free shopping experience.</p>
                <Link className='inline-block' to="/products">
                    <div className={`${styles.button} mt-5`}>
                        <span className='text-white font-[Poppins] text-[18px]'>Shop</span>
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default Hero
