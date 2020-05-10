import ProductsServices from "./ProductsServices";


//action types
export const GET_MAN_PRODUCTS = "listProduct/GET_MAN_PRODUCTS";
export const GET_WOMAN_PRODUCTS = "listProduct/GET_WOMAN_PRODUCTS"

const initialState = {
    listManProducts: [],
    listWomanProducts: []
}

// reducer 
export const listProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MAN_PRODUCTS:{
            return {
                ...state,
                listManProducts: action.data
            }
        }
        case GET_WOMAN_PRODUCTS:{
            return {
                ...state,
                listWomanProducts: action.data
            }
        }
        default: return state;
    }
}

// action creators

export const getManProducts =()=>{
    return dispatch => {
        ProductsServices.getManProducts().then((response)=>{
            dispatch({
                type: GET_MAN_PRODUCTS,
                data: response.data
            });
        })
    }
}

