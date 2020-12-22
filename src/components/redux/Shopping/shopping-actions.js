import * as actionTypes from './shopping-types';

export const addToCart = (itemID) => {
    //once we get ID, then return type
    return {
        type: actionTypes.ADD_TO_CART,
        payload: {
        id: itemID
        }
    }
}

export const removedFromCart = (itemID) => {
    return (
        type: actionTypes.REMOVE_FROM_CART,
        payload: {
            id: itemID
        }
    )
}

export const adjustQTY = (itemID, value) => {
    return (
        type: actionTypes.ADJUST_QTY,
        payload: {
            id: itemID,
            qty: value,
        }
    )
})

export const loadCurrentItem = (itemID) => {
    return (
        type: actionTypes.LOAD_CURRENT_ITEM,
        payload: item,
    )
}