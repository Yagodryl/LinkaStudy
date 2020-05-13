import React, { Component } from 'react';   
import * as MangeAction from "./reducer";
import { connect } from 'react-redux';


class AddProduct extends Component {
    state = { 
        name: "",
        description: "",
        price: 0,
        image: "",
        type: "1",
        sex: "1"
     }

     handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        console.log(this.state);
    }
    onSubmitForm = (e) => {
        e.preventDefault();
        const {name, description,price,image,type,sex} = this.state;
        this.props.addProduct({name, description,price,image,type,sex});
    }

    componentWillMount(){
        this.props.getInfoAddProduct();
    }

    render() { 

        const {name, description,price,image} = this.state;
        const {sexes = [], types = []} = this.props.infoAddProductData;

        const listSexes = sexes.map(item=>{
            return(
                <option key={item.id} value={item.id}>{item.name}</option>

            );
        })
        const listTypes = types.map(item=>{
            return(
                <option key={item.id} value={item.id}>{item.name}</option>

            );
        })
        return ( 
            <form onSubmit={ this.onSubmitForm }>
                <div className="form-group" >
                    <label htmlFor="title">Name</label>
                    <input type="text" className="form-control" id="name" name="name" autoComplete="off"
                        onChange={ this.handleChange }
                        value={ name } />
                </div>
                <div className="form-group" >
                    <label htmlFor="description">Description</label>
                    <textarea  type="text" className="form-control" id="description" name="description" autoComplete="off"
                        onChange={ this.handleChange }
                        value={ description } />
                </div>
                <div className="form-group" >
                    <label htmlFor="price">price</label>
                    <input type="number" className="form-control" id="price" name="price" autoComplete="off"
                        onChange={ this.handleChange }
                        value={ price } />
                </div>
                <div className="form-group" >
                    <label htmlFor="image">image</label>
                    <input type="text" className="form-control" id="image" name="image" autoComplete="off"
                        onChange={ this.handleChange }
                        value={ image } />
                </div>

                <div className="form-group">
                    <label htmlFor="sex">Sex</label>
                    <select className="form-control" id="sex" name="sex" autoComplete="off"
                        onChange={ this.handleChange }
                        // value={ sex }
                    >
                        {listSexes}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="type">Type</label>
                    <select className="form-control" id="type" name="type" autoComplete="off"
                        onChange={ this.handleChange }
                        // value={ sex }
                    >
                        {listTypes}
                    </select>
                </div>
               
                <button className="btn btn-primary" >Submit</button>
            </form>
         );
    }
}
 
const mapStateToProps = ({mangeProduct}) => {
    return{
        addProductSuccess: mangeProduct.addProductSuccess,
        infoAddProductData: mangeProduct.infoAddProductData
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addProduct: (product) => {
        dispatch(MangeAction.addProduct(product));
        },
        getInfoAddProduct: ()=>{
            dispatch(MangeAction.getInfoAddProduct());
        }
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)( AddProduct);