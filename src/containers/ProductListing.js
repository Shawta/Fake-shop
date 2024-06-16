import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import ProductComponent from './ProductComponet'
import { useDispatch } from 'react-redux'
import { setProducts } from './actions/productActions';

const ProductListing = () => {

    const dispatch = useDispatch()


    const fetchProducts = async () => {
        const response = await axios
            .get('https://fakestoreapi.com/products')
            .catch((err) => {
                console.log('Err', err);
            });
        dispatch(setProducts(response.data));

    };
    useEffect(() => {
        fetchProducts();
    }, []);


    return (
        <div className='ui grid container' >
            <ProductComponent />
        </div>
    );
};

export default ProductListing;


