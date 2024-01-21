import { configureStore } from '@reduxjs/toolkit'
import setNameSlice from './features/setNameSlice'

export const bookStore = () => {
  return configureStore({
    reducer: {
      setNameSlice: setNameSlice
    }
  })
}

export type AppStore = ReturnType<typeof bookStore>

export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
