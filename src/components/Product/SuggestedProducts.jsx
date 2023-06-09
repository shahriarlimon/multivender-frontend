import React, { useEffect, useState } from 'react';
import styles from '../../styles/styles';
import ProductCard from '../Route/ProductCard/ProductCard';
import { useSelector } from 'react-redux';

const SuggestedProducts = ({ product }) => {
    const [products, setProducts] = useState(null);
    const { allProducts } = useSelector((state) => state.products)
    useEffect(() => {
        const d = allProducts && allProducts.filter((i) => i.category === product.category);
        setProducts(d)
    }, [product, allProducts])
    return (
        <div>
            {
                product ? (<div className={`p-4 ${styles.section}`}>
                    <h2 className={`${styles.heading} text-[25px] font-[500] border-b mb-5`}>Related products</h2>
                    <div className='grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12'>
                        {
                            products && products.map((product, index) => (<ProductCard product={product} key={index} />))
                        }

                    </div>

                </div>) : null
            }
        </div>
    )
}

export default SuggestedProducts
