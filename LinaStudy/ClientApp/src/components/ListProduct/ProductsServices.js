import axios from "axios"

export default class ProductsServices {
    static getManProducts(){
        //console.log("/api/Products/get-man-producs")
        return axios.get("api/products/get-man-producs");
    }
}