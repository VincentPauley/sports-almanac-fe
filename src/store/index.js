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

const recordsSlice = createSlice({
  name: 'records',
  initialState: {
    count: 0
  },
  reducers: {
    setCount(state, action) {
      state.count = action.payload
    }
  }
})

const store = configureStore({
  reducer: {
    count: countSlice.reducer,
    records: recordsSlice.reducer
  }
})

export { store }
export const { incrementCount } = countSlice.actions
export const { setCount } = recordsSlice.actions
