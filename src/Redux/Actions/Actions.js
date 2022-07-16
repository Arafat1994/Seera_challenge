import ActionTypes from "../ActionTypes/ActionsTypes"




export const  setFilteredHotels=(data)=> {
    return{
        type : ActionTypes.SetFilterHotels , 
        payload : data 
    }
}