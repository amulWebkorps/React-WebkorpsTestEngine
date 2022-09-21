import { configureStore } from '@reduxjs/toolkit'
import adminSlice from './slicers/adminSlice'
import userSlice from './slicers/userSlice'
export const store = configureStore({
  reducer: {
    user:userSlice,
  },
})