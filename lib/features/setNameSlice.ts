import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// interface BookState {
//   floor: number | null
//   unit: string
// }

const initialState = {
  name: 'null'
}

export const setNameSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    }
  }
})

export const { setName } = setNameSlice.actions
export default setNameSlice.reducer
