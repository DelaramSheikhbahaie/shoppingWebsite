import { ActionTypes } from "../constans/action-types";

const initialState = {
    products : [] ,
    products_preview : []
}
export const productReducer = (state = initialState , {type , payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state, products: payload}
        case ActionTypes.SET_PRODUCTS_PREVIEW:
            return {...state, products_preview: payload}
        default:
            return state
    }
}
export const selectedProductReducer = (state = {} , {type , payload}) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return {... payload}
        default:
            return state
    }
}