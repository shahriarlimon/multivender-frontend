import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'
import ProductDetails from '../components/Product/ProductDetails'
import SuggestedProducts from '../components/Product/SuggestedProducts'
import { useSelector } from 'react-redux'

const ProductDetailsPage = () => {
    const { allProducts } = useSelector((state) => state.products)
    const [product, setProduct] = useState(null);
    const { id } = useParams();



    useEffect(() => {
        const data = allProducts && allProducts.find((i) => i._id === id);
        setProduct(data)
    }, [id, allProducts])
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
