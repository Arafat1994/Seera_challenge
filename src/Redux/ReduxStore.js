import  thunk  from "redux-thunk" ; 
import reducers from "./Reducers.js/reducersIndex";
import { createStore , applyMiddleware , compose } from "redux";


const composeEnhancer= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore( reducers , composeEnhancer(applyMiddleware(thunk)) ) ;


export default store ; 