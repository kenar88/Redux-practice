import * as actionTypes from './actionTypes';

const saveResult = (res) => {
    // const newRes = res * 2;
    return {
        type: actionTypes.STORE_RESULT,
        result: res
    };
};

export const storeResult = (res) => {
    return (dispatch, getState) => {
        setTimeout(() => {
            // const oldState = getState().ctr.counter;
            // console.log(oldState);            
            dispatch(saveResult(res));
        }, 2000)
    }
};

export const deleteResult = (id) => {
    return {
        type: actionTypes.DELETE_RESULT,
        strResId: id
    };
};
