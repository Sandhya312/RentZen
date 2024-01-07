
import { configureStore } from '@reduxjs/toolkit';
import ProductReducer from '../components/features/products/productSlice.js';

 const store = configureStore({
    reducer: {
        productsdb: ProductReducer,
    },
});


export default store;



