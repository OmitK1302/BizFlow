import React from 'react'
import { useState, useEffect  } from 'react';
import axios from 'axios';
import H_Products from '../components/H_Products.jsx';
import { useGetProductsQuery } from '../slices/productsApiSlice.js';

const ProductScreen = () => {
    // const [products, setProducts] = useState([]);

    
    const {data: products, isLoading, error} = useGetProductsQuery();
    
    // useEffect(() => {
    //     const fetchProducts = async () => {
    //         try {
    //             const {data} = await axios.get('/api/products');
    //             setProducts(data);
    //         } catch (error) {
    //             console.error("Error fetching products:", error);                
    //         }
            
    //     };

    //     fetchProducts();
    // }, []);

    console.log(products);
    return (
        <>
            {isLoading ? (
                <div className='sm:px-16 px-8 sm:py-24 py-12'>
                    <h1 className='text-2xl font-bold'>Loading...</h1>
                </div>
            ) : error ? (
                <div className='sm:px-16 px-8 sm:py-24 py-12'>
                    <h1 className='text-2xl font-bold'>Error: {error}</h1>
                </div>
            ) : 
            
            (
                <div className='sm:px-16 px-8 sm:py-24 py-12'>
                    <H_Products products={products} />
                </div>
            )}
        </>
        
        
        
        // <div>ProductScreen</div>
    )
}

export default ProductScreen