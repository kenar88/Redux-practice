import * as actionTypes from '../../store/actions/actionTypes';
import { updateObject } from '../utility'; //this func needed to make out reducers leaner

const initialState = {   
    result: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {       
        case actionTypes.STORE_RESULT: 
            return updateObject(state, {result: state.result.concat({id: new Date(), value: action.result})});       
        case actionTypes.DELETE_RESULT:
        const newResult = state.result.filter(res => res.id !== action.strResId)
            return updateObject(state, {result: newResult});
        default:
            return state;                 
    } 
}   

export default reducer;