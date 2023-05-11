import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'
import ProductDetails from '../components/Product/ProductDetails'
import SuggestedProducts from '../components/Product/SuggestedProducts'
import { useSelector } from 'react-redux'

const ProductDetailsPage = () => {
    const { allProducts } = useSelector((state) => state.products);
    const { allEvents } = useSelector((state) => state.events)
    const [product, setProduct] = useState(null);
    const { id } = useParams();
    const [searchParams] = useSearchParams();
    const eventData = searchParams.get("isEvent");





    useEffect(() => {
        if (eventData !== null) {
            const data = allEvents && allEvents?.find((i) => i._id === id);
            setProduct(data)
        } else {
            const data = allProducts && allProducts.find((i) => i._id === id);
            setProduct(data)
        }
    }, [allEvents, eventData, id, allProducts])
    return (
        <div>
            <Header />
            <ProductDetails product={product} />
            {
                !eventData && <>
                    {
                        product && <SuggestedProducts product={product} />
                    }
                </>
            }
            <Footer />
        </div>
    )
}

export default ProductDetailsPage
