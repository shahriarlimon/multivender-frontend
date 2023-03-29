import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Header from '../components/layout/Header'
import ProductCard from '../components/Route/ProductCart/ProductCard'
import { productData } from '../static/data'
import styles from '../styles/styles'

const BestSellingPage = () => {
    const [data, setData] = useState([]);
    useEffect(() => {

        const d = productData && productData.sort((a, b) => b.total_sell - a.total_sell);
        setData(d)

    }, [])
    return (
        <div>
            <Header activeHeading={2} />
            <br />
            <br />
            <div className={`${styles.section}`}>
                <div className='grid grid-cols-1 gap-[20px] md:grid-cols-2 mg:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:gridi-cols-5 xl:gap-[30px] mb-12'>
                    {
                        data && data.map((product, index) => <ProductCard key={index} product={product} />)
                    }

                </div>
                {
                    data && data.length === 0 ? (<h1 className='text-center w-full pb-[110px] text-[20px]  '>No products found</h1>) : null
                }

            </div>
        </div>
    )
}

export default BestSellingPage;
