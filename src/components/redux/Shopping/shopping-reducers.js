import * as actionTypes from './shopping-types';

//default state
const initialCart = [
    products: [], // id, title, desc, price, img
    cart: [], // id, title, desc, price, img, qty
    currentItem: null,
]

const shopReducer = (state = initialCart, action) => {
    //if action synced to reducer is equal to actionTypes.var, return {} from state
    switch(action.type) {
        case: actionTypes.ADD_TO_CART:
            return {}
        case actionTypes.REMOVE_FROM_CART:
            return {}
        case actionTypes.ADJUST_QTY:
            return {}
        case actionTypes.LOAD_CURRENT_ITEM:
            return {}
        // if none applies, return default state
        default:
            return state;
    } 
}