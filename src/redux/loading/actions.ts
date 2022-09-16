
import { END_ERROR, END_LOADING, START_ERROR, START_LOADING } from "./actionTypes"

const startLoading = ()=>{
    return {
        type: START_LOADING
    }
}

const endLoading = ()=>{
    return {
        type: END_LOADING
    }
}

const startError = (payload:any)=>{
    return {
        type: START_ERROR,
        payload
    }
}

const endError = ()=>{
    return {
        type: END_ERROR
    }
}

export {startLoading, endLoading, startError, endError}