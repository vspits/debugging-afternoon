import React, { Component } from 'react';
import './StoreFront.css';
import { connect } from 'react-redux';
import { addToShoppingCart, getAllProducts } from '../../redux/reducer';

class StoreFront extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }


    componentDidMount() {
        const {getAllProducts} = this.props
        getAllProducts()
    }

    render() {
        console.log(this.props.products)
        const {addToShoppingCart} = this.props
        let productDisplay = this.props.products.map((element, index) => {
            return (
                <div className="product-container" key={index}>
                    <h2>{element.title}</h2>
                    <img src={element.image} alt="" />
                    <h2>{element.desc}</h2>
                    <h3>{"$" + element.price + ".00"}</h3>
                    <button onClick={() => addToShoppingCart(element)}>Purchase!</button>
                </div>
            )
        })
        return (
            <div className="storefront-container">
                {productDisplay}
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return {
        products: reduxState.products,
        loading: reduxState.loading
    }
}

export default connect(mapStateToProps, {addToShoppingCart, getAllProducts})(StoreFront);