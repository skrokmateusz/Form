import { configureStore } from '@reduxjs/toolkit'

import navigationSlice from './navigation'
import validitySlice from './validity'

// const store = configureStore(myCartVisibleSlice.reducer)

const store = configureStore({
    reducer: { nav: navigationSlice.reducer, val: validitySlice.reducer }
})

export default store