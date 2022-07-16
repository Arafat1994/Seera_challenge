import ActionTypes from "../ActionTypes/ActionsTypes";



const intialState={FilterdData:[] } ; 


export const availableHotelsReducer = ( state =intialState , { type , payload }) =>{

    switch(type){
        case ActionTypes.SetFilterHotels : 
           return {...state , FilterdData:payload } ; 
        default : 
        return state ; 
    }
}