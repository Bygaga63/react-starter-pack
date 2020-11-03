import { combineReducers } from '@reduxjs/toolkit'
import * as reducers from './modules'

export const rootReducer = combineReducers({ ...reducers })
