import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: true,
}

export const adminSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value =false
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment } = adminSlice.actions

export default adminSlice.reducer