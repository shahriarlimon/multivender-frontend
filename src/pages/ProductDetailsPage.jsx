import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'
import ProductDetails from '../components/Product/ProductDetails'
import SuggestedProducts from '../components/Product/SuggestedProducts'
import { productData } from '../static/data'
import { useSelector } from 'react-redux'

const ProductDetailsPage = () => {
    const { name } = useParams();
    const [product, setProduct] = useState(null);
    const { allProducts } = useSelector((state) => state.products)
    const productName = name.replace(/-/g, " ");
    useEffect(() => {
        const data = allProducts?.find((i) => i.name === productName);
        setProduct(data)
    }, [allProducts, productName])
    return (
        <div>
            <Header />
            <ProductDetails product={product} />
            {
                product && <SuggestedProducts product={product} />
            }
            <Footer />
        </div>
    )
}

export default ProductDetailsPage
