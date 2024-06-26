import { useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useCartDispatch = useDispatch.withTypes<AppDispatch>()
export const useCartSelector = useSelector.withTypes<RootState>()