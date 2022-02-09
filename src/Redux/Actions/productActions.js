import { ActionTypes } from "../Constants/action-types"

export const SET_PRODUCTS =(products)=>{
    return {
        type:ActionTypes.SET_PRODUCTS,
        payload:products,
    }

}

export const selectedProduct=(product)=>{
    return{
        type:ActionTypes.SELECTED_PRODUCTS,
        payload:product,
    }
}
export const RemoveSelectedProduct=(product)=>{
    return{
        type:ActionTypes.REMOVE_SELECTED_PRODUCT,
       
    }
}