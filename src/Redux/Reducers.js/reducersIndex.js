
import {combineReducers} from "redux" 
import { availableHotelsReducer } from "./Reducers"

export const reducers = combineReducers({
    AvailableHotels : availableHotelsReducer
}) ; 

export default reducers ; 