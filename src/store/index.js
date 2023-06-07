import { configureStore, createSlice } from '@reduxjs/toolkit'

const countSlice = createSlice({
  name: 'count',
  initialState: 0,
  reducers: {
    incrementCount(state, action) {
      return (state = state + 1)
    }
  }
})

const store = configureStore({
  reducer: {
    count: countSlice.reducer
  }
})

export { store }
export const { incrementCount } = countSlice.actions
