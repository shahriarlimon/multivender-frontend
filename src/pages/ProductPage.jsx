import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Header from '../components/layout/Header'
import ProductCard from '../components/Route/ProductCard/ProductCard'
import styles from '../styles/styles'
import { useSelector } from 'react-redux'

const ProductPage = () => {
  const [searchParams] = useSearchParams();
  const { allProducts } = useSelector((state) => state.products)
  const categoryData = searchParams.get("category");
  const [data, setData] = useState([]);
  useEffect(() => {
    if (categoryData === null) {
      /*  const d = allProducts && allProducts.sort((a, b) =>
         a?.sold_out - b?.sold_out
       ); */
      setData(allProducts)
    } else {
      const d = allProducts && allProducts.filter((i) => i.category === categoryData);
      setData(d)
    }
  }, [categoryData, allProducts])
  return (
    <div>
      <Header activeHeading={3} />
      <br />
      <br />
      <div className={`${styles.section}`}>
        <div className='grid grid-cols-1 gap-[20px] md:grid-cols-2 mg:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:gridi-cols-5 xl:gap-[30px] mb-12'>
          {
            data && data?.map((product, index) => <ProductCard key={index} product={product} />)
          }

        </div>
        {
          data && data.length === 0 ? (<h1 className='text-center w-full pb-[110px] text-[20px]  '>No products found</h1>) : null
        }

      </div>
    </div>
  )
}

export default ProductPage
