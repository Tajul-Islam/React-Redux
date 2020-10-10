import * as actionTypes from '../actions/actionTypes';

const initialState ={
    results:[]
};
const resultReducer = (state = initialState, action) =>{
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(),value:action.counter})
            };
        case actionTypes.DELETE_RESULT:
            let updatedResultArray = [...state.results];
            updatedResultArray = updatedResultArray.filter(result=>result.id !== action.clickId);
            return {
                ...state,
                results: updatedResultArray
            };
        default:
            return state
    }
};

export default resultReducer;
