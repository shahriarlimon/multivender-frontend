import React from 'react'
import { useNavigate } from 'react-router-dom'
import { brandingData, categoriesData } from '../../../static/data'
import styles from '../../../styles/styles'

const Category = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className={`${styles.section} hidden sm:block`}>
                <div className='branding my-12 flex justify-between w-full shadow-sm bg-white p-5 rounded-md'>
                    {
                        brandingData && brandingData.map((i, index) => (<div key={index} className='flex items-start'>
                            {i.icon}
                            <div className='px-3 '>
                                <h3 className='font-bold text-sm md:text-base'>{i.title}</h3>
                                <p className='text-xm sm:text-sm'>{i.Description}</p>
                            </div>
                        </div>))
                    }
                </div>

            </div>
            <div id='categories' className={`${styles.section} bg-white p-6 rounded-lg mb-12`}>
                <div className='grid grid-cols-1 gap-[5px] md:grid-cols-2 md:gap-[10px] lg:grid-cols-3 lg:gap-[20px] xl:grid-cols-5 xl:gap-[30px]'>
                    {
                        categoriesData && categoriesData.map((i, index) => {
                            const handleSubmit = (i) => {
                                navigate(`/products?category=${i.title}}`);
                                window.location.reload()
                            }
                            return (
                                <div onClick={() => handleSubmit(i)} key={index} className='w-full h-[100px] flex items-center justify-between cursor-pointer overflow-hidden  '>
                                    <h5 className='text-[18px] leading-[1.3]'>{i.title}</h5>
                                    <img className='w-[120px] object-cover' src={i?.image_Url} alt='.' />

                                </div>
                            )
                        })
                    }

                </div>

            </div>
        </>
    )
}

export default Category
