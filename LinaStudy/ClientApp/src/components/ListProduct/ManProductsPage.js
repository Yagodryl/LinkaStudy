import React, { Component } from 'react';
import ProductItem from "./ProductItem";

class ManProductsPage extends Component {
    state = {  }
    render() { 
        return (  
            <div className="row">
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>

            </div>
        );
    }
}
 
export default ManProductsPage;