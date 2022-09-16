import { END_ERROR, END_LOADING, START_ERROR, START_LOADING } from "./actionTypes"

const loadingState = {
    loading: false,
    error: '',
    loginPopUp : false
}

const loadingReducer = (state=loadingState, action:any)=>{
    switch(action.type){
        case START_LOADING : return {loading: false}; break;
        case END_LOADING : return {loading: false}; break;
        case START_ERROR : return {error: action.payload}; break;
        case END_ERROR : return {error: ''}; break;
        
        default : return state
    }
}

export default loadingReducer