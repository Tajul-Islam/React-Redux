import {DELETE_RESULT, STORE_RESULT} from "./actionTypes";

export const saveResult = (val) =>{
    return {
        type:STORE_RESULT,
        counter:val
    }
};

export const storeResult = (val) =>{
    return dispatch =>{
        setTimeout(()=>{
            dispatch(saveResult(val));
        },2000)
    }
};

export const deleteResult = (val) =>{
    return {
        type:DELETE_RESULT,
        clickId:val
    }
};
