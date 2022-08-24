import { configureStore } from '@reduxjs/toolkit'
import adminSlice from './slicers/adminSlice'
export const store = configureStore({
  reducer: {
    admin:adminSlice
  },
})