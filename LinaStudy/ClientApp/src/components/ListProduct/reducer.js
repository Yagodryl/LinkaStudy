import ProductsServices from "./ProductsServices";


//action types
export const GET_MAN_PRODUCTS_STARTED = "listProduct/GET_MAN_PRODUCTS_STARTED";
export const GET_MAN_PRODUCTS_SUCCESS = "listProduct/GET_MAN_PRODUCTS_SUCCESS";
export const GET_MAN_PRODUCTS_FAILED = "listProduct/GET_MAN_PRODUCTS_FAILED";



// export const GET_WOMAN_PRODUCTS = "listProduct/GET_WOMAN_PRODUCTS"

const initialState = {
    listManLoading: false,
    listManError: '',
    listManProducts: [],
    listWomanProducts: []
}

// reducer 
export const listProductReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_MAN_PRODUCTS_STARTED:{
            return {
                ...state,
                listManLoading: true
            }
        }
        case GET_MAN_PRODUCTS_SUCCESS:{
            return {
                ...state,
                listManProducts: action.data,
                listManLoading: false
            }
        }
        case GET_MAN_PRODUCTS_FAILED:{
            alert(action.errorMess);
            return {
                ...state,
                listManLoading: false,
                listManError: action.errorMess
            }
        }
        // case GET_WOMAN_PRODUCTS:{
        //     return {
        //         ...state,
        //         listWomanProducts: action.data
        //     }
        // }
        default: return state;
    }
}

// action creators

export const getManProducts =()=>{
    return dispatch => {
        dispatch({
            type: GET_MAN_PRODUCTS_STARTED
        })
        ProductsServices.getManProducts().then((response)=>{
            dispatch({
                type: GET_MAN_PRODUCTS_SUCCESS,
                data: response.data
            });
        },
        error => {
          throw error;
        } )
        .catch((error)=>{
    
           dispatch({ type: GET_MAN_PRODUCTS_FAILED,
            errorMess: error.response.data});
        })
    }
}

