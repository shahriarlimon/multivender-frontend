import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { productData } from '../../static/data'
import styles from '../../styles/styles'
import ProductCard from '../Route/ProductCart/ProductCard'

const ShopProfileData = ({ isOwner }) => {
    const [active, setActive] = useState(1)
    return (
        <div className='w-full '>
            <div className='flex w-full items-center'>
                <div className='w-full flex'>
                    <div onClick={() => setActive(1)} className='flex items-center'>
                        <h5 className={`font-[600] text-[20px] ${active === 1 ? "text-red-500" : "text-[#333]"} cursor-pointer pr-[20px]`}>Shop Products</h5>
                    </div>
                    <div onClick={() => setActive(2)} className='flex items-center'>
                        <h5 className={`font-[600] text-[20px] ${active === 2 ? "text-red-500" : "text-[#333]"} cursor-pointer pr-[20px]`}>Running Events</h5>
                    </div>
                    <div onClick={() => setActive(3)} className='flex items-center'>
                        <h5 className={`font-[600] text-[20px] ${active === 3 ? "text-red-500" : "text-[#333]"} cursor-pointer pr-[20px]`}>Shop Reviews</h5>
                    </div>
                </div>
                <div>
                    {
                        isOwner && (<div className={``}>
                            <Link to={"/dashboardF"}> 
                            <div className={`${styles.button} !rounded-[4px] !h-[42px] `}>
                                <span className='text-white'>Go Dashboard</span>

                            </div>
                            </Link>
                        </div>)
                    }
                </div>
            </div>
            <br />
            <div className='grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-[25px] xl:grid-cols-4 xl:gap-[25px] mb-12 border-0'>
                {
                    productData && productData.map((product, index) => <ProductCard key={index} product={product} />)
                }
            </div>
        </div>
    )
}

export default ShopProfileData
