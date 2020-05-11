import axios from "axios"

export default class ProductsServices {
    static addProduct(product){
        return axios.post("api/Products/add-product",product);
    }

    static infoAddProduct(){
        return axios.get("api/Products/info-add-product");
    }
}