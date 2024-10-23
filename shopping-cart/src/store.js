import { configureStore} from '@reduxjs/toolkit'
import cartSlice from './redux-toolkit/cartSlice';
import productSlice from './redux-toolkit/productSlice';

const store = configureStore({
    reducer:{
        cart:cartSlice,
        products:productSlice
    }
})

export default store;