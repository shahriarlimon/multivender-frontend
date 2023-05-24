import React, { useEffect, useState } from 'react'
import { productData } from '../../../static/data';
import styles from '../../../styles/styles';
import ProductCard from '../ProductCard/ProductCard';
import { useSelector } from 'react-redux';

const BestDeals = () => {
    const [data, setData] = useState([]);
    const { allProducts } = useSelector((state) => state.products)
    useEffect(() => {
        const firstFive = allProducts?.slice(0, 5);
        setData(firstFive)
    }, [allProducts])
    return (
        <div className={`${styles.section}`}>
            <div className={`${styles.heading}`}>
                <h1>Best Deals</h1>
                <div className='grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0'>
                    {
                        data && data.map((product, index) => (<ProductCard key={index} product={product} />))
                    }

                </div>

            </div>

        </div>
    )
}

export default BestDeals
