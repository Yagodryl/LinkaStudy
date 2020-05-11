
import ManageProductServices from "./ManageProductServices"

export const ADD_PRODUCT = "mangeProduct/ADD_PRODUCT";
export const INFO_ADD_PRODUCT = "mangeProduct/INFO_ADD_PRODUCT";


const initialState = {
   addProductSuccess: false,
   infoAddProductData:{}
}


//reducer
export const mangeProductReducer = (state = initialState, action)=>{
    switch (action.type) {
        case ADD_PRODUCT:
            {
                return {
                    ...state,
                    addProductSuccess: true
                }
            }
            case INFO_ADD_PRODUCT:
            {
                return {
                    ...state,
                    infoAddProductData: action.payload
                }
            }
    
        default: return state;
    }
}

//Action creator
export const addProduct = (product)=>{
    return dispatch => {
        ManageProductServices.addProduct(product).then(()=>{
            dispatch({type: ADD_PRODUCT});
        });
    }
}

export const getInfoAddProduct = ()=>{
    return dispatch => {
        ManageProductServices.infoAddProduct().then((response)=>{
            dispatch({type: INFO_ADD_PRODUCT,
                payload: response.data});
        })

    }
}