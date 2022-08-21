import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './counterSlice'

/* Creating a store with the reducer counterReducer. */
const store = configureStore({reducer:{counter:counterSlice}}) 

export default store;