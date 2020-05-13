import React, { Component } from 'react';
import ProductItem from "./ProductItem";
import { connect } from 'react-redux';
import * as ProductsAction from "./reducer";
import Loader from "../Helpers/Loader";

class ManProductsPage extends Component {
    state = {  }

    componentDidMount(){
        console.log("sddsd")
        this.props.getManProducts();
    }

    render() { 

        const {manProducts=[], loading} = this.props;
        const listManProducts = manProducts.map((item)=>{
            return (
                <ProductItem title = {item.title} description={item.description} img={item.image} key={item.id} />
            )
        })
        console.log(this.props.manProducts) 
        return ( (loading)?<Loader/>:(<div className="row">{listManProducts}</div>)
        );
    }
}
 
// export default ManProductsPage;

const mapStateToProps = ({listProduct}) => {
    console.log("dddddddd", listProduct)
    return{
        manProducts: listProduct.listManProducts,
        loading: listProduct.listManLoading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getManProducts: () => {
        dispatch(ProductsAction.getManProducts());
      }
    };
  };

export default connect(mapStateToProps,mapDispatchToProps )(ManProductsPage);