import { ActionTypes } from "../Constants/action-types"

export const SET_PRODUCTS =(products)=>{
    return {
        type:ActionTypes.SET_PRODUCTS,
        payload:products,
    }

}

export const SELECTED_PRODUCT=(selectProducts)=>{
    return{
        type:ActionTypes.SELECTED_PRODUCTS,
        payload:selectProducts,
    }
}